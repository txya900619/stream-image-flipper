import axios from 'axios'
import {createWriteStream} from 'node:fs'
import sharp = require('sharp')
import {promisify} from 'node:util'
import {pipeline as originPipeline} from 'node:stream'

const pipeline = promisify(originPipeline)

export async function downloadFlipFlopImage(
  url: string,
  outputPath: string,
): Promise<void> {
  const res = await axios.get(url, {responseType: 'stream'})
  const writer = createWriteStream(outputPath)
  await pipeline(res.data, sharp().rotate(180), writer)
}
