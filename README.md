# Marionette

A [Fresh](https://fresh.deno.dev) project at https://marionette.deno.dev

A [Github Repo](https://github.com/Hyprtxt/marionette.deno.dev) at
https://github.com/Hyprtxt/marionette.deno.dev

This is intereting because it has Puppeteer Testing integrated with Github
Actions!

Try:

```
deno test -A
```

But you need to install Chrome or Firefox with the link first. It will give you
the install command, or you can go copy it out of the github action.

## Github Actions

Runs `deno fmt` and the Puppeteer tests on Github Actions using a Linux Host.
Fork the project and push to main or test to try it out.

.github/workflows/deno.yml

### Things to do

Setup the tests so they launch the project, and test that version.

## Fresh Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
