import * as React from 'react'
import { footer, footerMenu, footerMenuItem, footerText } from './styles'
import siteVars from './siteVariables'
import { Divider, Menu, Image, Provider, Text } from '@stardust-ui/react'
import { pxToRem } from '../../../../src/lib'
import Dusty from './dusties'
import { footer as md_footer } from './styles/materialStyles'
import { mergeStyles } from './utils'

export default () => {
  return (
    <Dusty.div styles={mergeStyles(footer, md_footer)}>
      <Provider
        theme={{
          componentStyles: {
            Menu: {
              root: footerMenu,
            },
            MenuItem: {
              root: footerMenuItem,
            },
          },
        }}
      >
        <>
          <Dusty.div
            styles={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '45px 0 0 0',
            }}
          >
            {'Organized with <love/> by'}
            <Image
              src="https://reactiveconf.com/images/vacuum_footer.png"
              variables={{ height: pxToRem(50) }}
            />
          </Dusty.div>
          <Menu
            styles={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}
            items={[
              { content: 'Code of Conduct', styles: { color: siteVars.green } },
              { content: 'General Terms and Conditions', styles: { color: siteVars.green } },
              { content: 'Privacy Policy', styles: { color: siteVars.green } },
            ]}
          />
        </>
      </Provider>

      <Divider />
      <Text
        content="VacuumLabs is a team of modern backend, web, and mobile development technology experts obsessed with delivering the future to our partners and clients."
        styles={footerText}
        as="div"
      />
    </Dusty.div>
  )
}
