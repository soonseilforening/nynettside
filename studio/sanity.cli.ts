import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'soonseilforening',
  deployment: {
    appId: 'u1y741hz7xzzfe4xlin893da',
  },
})
