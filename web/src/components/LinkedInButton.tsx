import { Image, Text } from '@chakra-ui/react'
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

import { useAuth } from 'src/auth'

const LinkedInButton = () => {
  const { logIn, isAuthenticated, currentUser, getToken } = useAuth()

  if (isAuthenticated) {
    fetch('https://api.linkedin.com/v2/jobs', {
      headers: {
        Authorization:
          'Bearer AQUlsIHNlw-_DbJ43Xnf3ZJevsolM7e4JKpnCEx6uxW8gAfQTvXsmNY8N1g_zV1L_XHo_wc4sGansYTuvDnhZA48MMG1LAntnFuLrsULW16qBh1iDkPoC1j3lccvl5IEMw00kt5qMDZs78l8IhTPFDZQB4vMLCFEWq_v-Cl2pjXt_PZ6vxdlfjQjOzQcgSj9ugl_ub9gFinsqlxZi-V9bE9Z7a8ce76R2y5TovGzFzAcI3_JGBso5xGVeLtjSl9b6zlns3p2YWfkOfmUNFS8cEjEU38z-AK30oXo2mFfW7dfVboqpiHc1uYi0io0mtZNsla-Ql_rg4EwDFXFY6KttF3XCiMzLQ',
      },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(JSON.stringify(json)))

    // const data = {
    //   client_id: '86olxjja5p40em',
    //   client_secret: 'PyqxOKMLswYPZCqC',
    //   token:
    //     'AQUlsIHNlw-_DbJ43Xnf3ZJevsolM7e4JKpnCEx6uxW8gAfQTvXsmNY8N1g_zV1L_XHo_wc4sGansYTuvDnhZA48MMG1LAntnFuLrsULW16qBh1iDkPoC1j3lccvl5IEMw00kt5qMDZs78l8IhTPFDZQB4vMLCFEWq_v-Cl2pjXt_PZ6vxdlfjQjOzQcgSj9ugl_ub9gFinsqlxZi-V9bE9Z7a8ce76R2y5TovGzFzAcI3_JGBso5xGVeLtjSl9b6zlns3p2YWfkOfmUNFS8cEjEU38z-AK30oXo2mFfW7dfVboqpiHc1uYi0io0mtZNsla-Ql_rg4EwDFXFY6KttF3XCiMzLQ',
    // }

    // fetch('https://www.linkedin.com/oauth/v2/introspectToken', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // })
  }

  return (
    <>
      {isAuthenticated && <Text>Welcome {currentUser.email}</Text>}
      {!isAuthenticated && (
        <Image
          onClick={() => {
            logIn({
              authMethod: 'oauth',
              provider: 'linkedin',
            })
          }}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
      )}
    </>
  )
}

export default LinkedInButton
