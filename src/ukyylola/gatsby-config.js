module.exports = {
	siteMetadata: {
		title: `Uky y Lola`,
		description: `Uky y Lola en tierra del Fuego`,
		author: `Fabian Andrade <andradefabian@gmail.com>`,
		twitterHandle: '@fabzhole',
		url: 'https://ukyylola.com/',
		domain: `https://ukyylola.com`
	},

	pathPrefix: `/`,
	plugins: [
		{
			resolve: 'gatsby-source-google-spreadsheet',
			options: {
				// The `spreadsheetId` is required, it is found in the url of your document:
				// https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
				spreadsheetId: '1JqruIx2dMPRmR_iOsycJCF0PLoIIXPeQqfOmZNSb-08',

				// The `spreadsheetName` is recommended, but optional
				// It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
				// If you are sourcing multiple sheets, you can set this to distringuish between the source data
				spreadsheetName: 'Uky_master_historia',

				// The `typePrefix` is optional, default value is "GoogleSpreadsheet"
				// It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
				// It can be overridden to fully customize the root query
				typePrefix: 'GoogleSpreadsheet',

				// The `credentials` are only needed when you need to be authenticated to read the document.
				// It's an object with the following shape:

				// client_email: 'andradefabian@gmail.com',
				// private_key: 'AIzaSyB4XH1uORNRXCxmjjhodABK5OkXsjIqIXQ',
				// Refer to googles own documentation to retrieve the credentials for your service account:
				//   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
				//   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
				//
				// When you have generated your credentials, it's easiest to refer to them from an environment variable
				// and parse it directly:
				// credentials: {
				// 	web: {
				// 		client_id: '2935446071-nglki7jftbcu4d4a5qkap72hc8ell23c.apps.googleusercontent.com',
				// 		project_id: 'soul-9c0b3',
				// 		auth_uri: 'https://accounts.google.com/o/oauth2/auth',
				// 		token_uri: 'https://oauth2.googleapis.com/token',
				// 		auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
				// 		client_secret: 'HkkPfe5rUA0qhaRHXcBoBKBa'
				// 	}
				// },

				credentials: {
					type: 'service_account',
					project_id: 'uky-y-lola',
					private_key_id: '6f04b920e98e823831782edaf4be746c219692b5',
					private_key:
						'-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCplN9PFqGnjRE4\ntYyphGVYu2UALV00ntal6UgU/j3ahh5Bgoq//YivWCuADzdswDk92DkeV+aQ2nIL\n2AZsdNTsu4daOcRXwnMk6uFEjrX2HFARsXMjmd6cYns3Br14tOa07p6xH7RaIj66\nLL6F97huiEWJczfBeFbdYUTfnY6WPMS3M+bn1Kq9o2Ok5o41BwKjkZgk90XKimKx\ndxcNvhStzdDhEJIEvbw/szqPuOehY8qk0G/S23pbkKLvgfd+fv17asToamUceJDF\nuHImlKWQ1QlWikCaDbn99OIu35M4WGDPEcqQ5M/B9jQwJ0Qw4EYPrfgq7DoSCaeT\n60zuQ4MRAgMBAAECggEAEPCEj/9oPXbrcfk8qFBH2WG6uJZPeaqmMWOIpkQxRIti\nKVQTbRMz3KQXkE600CGxdhqLthq8ttqDSuiU16+h91XSMvKTSNrtKpJl1zXUOlXg\nr6vEnxlHMeLqgPgk5BJZ+1fctT/AAcLq9ijzDSnOHAhzvcOrHaHaN3n4acfwztPw\nRpzxMxnY5QBOHzscUgTkM3fH/IZLPZlakcCXguy0QIhOpJV1dAoIULKNmKOM4w+4\nvK0+dpmKWg7/CelaDu45BlpficUQqhjYe+3CFC9FBSYfVGsMC5dqr/EBxrfbkyVD\nAEVmMPBXd/yXwPJVM3PbrtRfKjZXPjuTwkiD69pkwwKBgQDoyaSF2RDYIlN7hbPO\nBDOi4sOY1737VOKDTxB5WNdWaEq3ZBqpY6ilrDuHwbSc/OMFTjY+nn1V2GteLkVn\nTblZ5176TjDGJfERK+sT5mluvIOQJERqeZdFlzb4q/DVBjT0iTY+1uvDz/Hhhkiy\n0R6QyXDfN3SxCokJTKPfktIrywKBgQC6fcUx2z4QjgI4WBYzwpSuKfVWq2WbGRdB\nl5PAlmkhqraTAsD/lXgCd5dIoKY+TPZn+rnmmT0U084on1tDAYq6r7J667IvDt8m\nGTxJ8BuGbjW6twnj3eNe0izEFEy4VHqU+tG7Yc9ESFunev+0FofO3HU2kddnEFje\nVnDjz5xpEwKBgQDDhvMo9c0fLZ3fZ8tCJOdWTpAqJjROEdt8nYFh24xr6IexiGSY\nmLvEBGmwOrTBE+x/vVT0vdzaqUBtyAHFplQkPqHZLqnrFV1ppfD7MxKlz7PV85B/\nuoekDUJAFvPfiioap9GncJBxVY1+d3NCt0GsLXcgFo1uU0INTJFsrf7YhwKBgQCk\ni85PVDPp5XLeBhLo7pnDJjBbnXVUKQpVDIoIlm4Cj57yDa7+lAJEowJvyZeFRuDv\nE9GtPq4fT1cKjri2YYjneZjQTmB0lvmbow6H6nxO27U6nr/yN1ij1Gw9QfADgD58\nbuZZIE8B35pHJwaw/mQryGb/lCTrwge3fauzxf4q0wKBgQDh88TVUjIyjtX/6JSC\nuSdplmLF3+ODdN/IG0gLC5dNp5MBcEqhDEYNCi7j2SyS9CEg8MZO3l9sOnJ6SNN7\nPdADmNgTzPAYJabn7tczS8YSp48p+Dhp+3zjN8DUi82cM53gi0lWdR3Y+Ufzuwn8\nrGidnn9/kSlpfCkj7dFhBq7vDA==\n-----END PRIVATE KEY-----\n',
					client_email: 'uky-945@uky-y-lola.iam.gserviceaccount.com',
					client_id: '115887329926435523296',
					auth_uri: 'https://accounts.google.com/o/oauth2/auth',
					token_uri: 'https://oauth2.googleapis.com/token',
					auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
					client_x509_cert_url:
						'https://www.googleapis.com/robot/v1/metadata/x509/uky-945%40uky-y-lola.iam.gserviceaccount.com'
				}
				// The `mapValue(value, key, cell)` function lets you map each cell's value to your need.
				// For example, it can be used to ensure that all strings are trimmed:
				// mapValue: (value) => (typeof value === 'string' ? value.trim() : value)
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-27744179-98`
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Open Sans`,
						variants: [ `300`, `400` ]
					},
					{
						family: `Merriweather`,
						variants: [ `300`, `400`, `700`, `700i`, `900` ]
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `suscripcion`,
				short_name: `suscripcion`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#a21521`,
				display: `minimal-ui`,
				icon: `src/images/icon-lt.png`
			}
		}
	]
};
