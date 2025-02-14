import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Usage = () => (
  <ExampleSection title="">
    <ComponentExample
      title="Custom panel title"
      description="Accordion panel's title can be customized."
      examplePath="components/Accordion/Usage/AccordionPanelCustomTitleExample"
    />
    <ComponentExample
      title="Custom panel content"
      description="Accordion panel's content can be customized."
      examplePath="components/Accordion/Usage/AccordionPanelCustomContentExample"
    />
  </ExampleSection>
)

export default Usage
