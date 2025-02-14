import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Usage = () => (
  <ExampleSection title="">
    <ComponentExample
      title="Match Background Example"
      description="The status border for avatar should be set to match whatever background it is on."
      examplePath="components/Avatar/Usage/AvatarUsageExample"
    />
  </ExampleSection>
)

export default Usage
