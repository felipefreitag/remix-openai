# Remix-OpenAI quickstart

This is an implementation adapted from the official [OpenAI Node quickstart](https://github.com/openai/openai-quickstart-node)

It uses:

- [Remix](https://remix.run/docs)
- [OpenAI Node] (https://github.com/openai/openai-node)

You can choose whichever deployment target you want, this example uses [Netlify](https://docs.netlify.com) 

## OpenAI account

You'll need an [OpenAI API key](https://platform.openai.com/account/api-keys).

Copy it to your `.env` file.

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Serve your site locally

Run

```sh
npm run start
```

to serve your site locally at [http://localhost:8888](http://localhost:8888).

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
