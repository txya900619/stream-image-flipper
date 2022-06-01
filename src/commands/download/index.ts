import {Command, Flags} from '@oclif/core'
import {downloadFlipFlopImage} from '../../core'
export default class Download extends Command {
  static description = 'Download and flip image from url'

  static examples = [
    '$ stream-image-flipper https://i.imgur.com/NsLIePL.jpeg -o output.jpg',
  ]

  static flags = {
    output: Flags.string({
      char: 'o',
      description: 'output file path',
      required: false,
    }),
  }

  static args = [
    {name: 'url', description: 'url image come from', required: true},
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Download)

    const outputPath = flags.output ?? args.url.split('/').pop()

    await downloadFlipFlopImage(args.url, outputPath)

    this.log(
      `download ${args.url} from ${outputPath}! (./src/commands/download/index.ts)`,
    )
  }
}
