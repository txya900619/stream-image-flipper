import {readFileSync, unlinkSync} from 'node:fs'
import {expect, test} from '@oclif/test'

describe('download', () => {
  test
  .stdout()
  .command([
    'download',
    'https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf',
    '--output=test_image',
  ])
  .it('runs download cmd', async ctx => {
    expect(ctx.stdout).to.contain(
      'download https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf from test_image! (./src/commands/download/index.ts)',
    )
    expect(readFileSync('./test/right_image')).to.eql(
      readFileSync('./test_image'),
    )
    unlinkSync('./test_image')
  })
})
