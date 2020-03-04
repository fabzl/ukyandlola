import React from "react"
import { withFirebase } from "../../Firebase"
import { StNewsletterForm, StNewsletterFormWrap } from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const INITIAL_STATE = {
  email: '',
  accept: true,
}

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...INITIAL_STATE,
      registered: false,
      newsletters: {},
      notified: false,
    }
  }

  componentDidMount(){
    if(this.props.registeredEmail){
      this.setState({ email: this.props.registeredEmail})
    }
  }

  componentWillUnmount(){

  }

  componentWillUpdate(nextProps, nextState){
    if(!nextState.notified){
      if(nextState.registered){
        this.props.callbackNotifier(nextState.email)
      }
      if(nextState.newsletters){
        if (Object.keys(nextState.newsletters).length === 0 && nextState.newsletters.constructor === Object) {} else {
          this.props.callbackNewsletters(nextState.newsletters)
          this.setState({ notified: true })
        }
      }
    }
  }

  onSubmit = event => {
    const {email} = this.state
    const newsletter = this.props.newsletter

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, 'nullpass')
      .then(authUser => {
        const userRef = this.props.firebase.db.ref('users/' + authUser.user.uid)
        userRef.once('value')
          .then(snapshot => {
            const newsletters = snapshot.child('newsletters').val() ? snapshot.child('newsletters').val() : {};

            newsletters[newsletter] = true;
            this.setState({
              newsletters: newsletters,
            })
            return userRef.update({
              newsletters
            })
          })
      })
      .then(() => {
        this.setState({registered: true})
      })
      .catch((err) => {
        if(err.code === 'auth/email-already-in-use'){
          this.props.firebase.
            doSignInWithEmailAndPassword(email, 'nullpass')
            .then(authUser => {
              const userRef = this.props.firebase.db.ref('users/' + authUser.user.uid)
              userRef.once('value')
                .then(snapshot => {
                  const newsletters = snapshot.child('newsletters').val() ? snapshot.child('newsletters').val() : {};

                  newsletters[newsletter] = true;
                  this.setState({
                    newsletters : newsletters,
                  })
                  return userRef.update({
                    newsletters
                  })
                })
            })
            .then(() => {
              this.setState({ registered: true })
            })
            .catch((err2) => {
              console.log('Err2: ', err2)
            })
        }
      })
    event.preventDefault()
  }

  onChange = event => {
    this.setState( { [event.target.name]: event.target.value } )
  }
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked })
  }
  render() {
    const { email, accept, registered } = this.state
    const { registeredEmail } = this.props
    const isInvalid =
      email === '' ||
      accept === false

    return (
      <StNewsletterFormWrap>
        { !registered ? (
          <StNewsletterForm>
          <form onSubmit={this.onSubmit}>
            { registeredEmail ? (
              <div className="formWrap">
                  <button type="submit">Inscríbete &nbsp;<FontAwesomeIcon icon={['fas', 'plus']} /></button>
              </div>
            ) : (
              <>
                <div className="formWrap">
                  <input
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    placeholder="tucorreo@mail.com"
                  />
                  <button disabled={isInvalid} type="submit">Continuar &nbsp;<FontAwesomeIcon icon={['fas', 'chevron-right']} /></button>
                </div>
                <label htmlFor="check">
                  <input
                    id="check"
                    name="accept"
                    type="checkbox"
                    checked={accept}
                    onChange={this.onChangeCheckbox}
                  />
                  Acepto los <a href="https://www.latercera.com/terminos-y-condiciones/" target="_blank" rel="noopener noreferrer">términos y condiciones</a>.</label>
                {!accept && <span className="error">Debes aceptar las condiciones</span>}
              </>
            )}
          </form>
        </StNewsletterForm>
        ) : (
          <div className="registered">
            <button disabled>Suscrito &nbsp; <FontAwesomeIcon icon={['fas', 'check']} /></button>
          </div>
        )}
      </StNewsletterFormWrap>
    )
  }
}

export default withFirebase(NewsletterForm)