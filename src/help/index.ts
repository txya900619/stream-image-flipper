import {Help} from '@oclif/core'

export default class CustomHelp extends Help {
  async showRootHelp(): Promise<void> {
    console.log('')
  }
}
