import Counter from "../islands/Counter.tsx";
import { CSS, render } from "gfm";
import { Head } from "$fresh/runtime.ts";

export const handler = {
  GET: async (req, ctx) => {
    const markdown = await Deno.readTextFile(`README.md`);
    const baseUrl = "https://github.com/Hyprtxt/marionette.deno.dev/blob/main";
    const readme = render(markdown, { baseUrl, disableHtmlSanitization: true });
    return ctx.render({ CSS, readme, url: req.url });
  },
};

export default function PageHome({ data }) {
  const { CSS, readme } = data;
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Head>
        <style>{CSS}</style>
      </Head>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome! You can use this module to help you run Deno tests on your
        Fresh project. Launch them with `deno test -A` or use VSCode like this:
      </p>
      <div class="w-full relative box-border" style="padding: 28.125%;">
        <iframe
          src="https://www.youtube.com/embed/OG77NdqL164?rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="absolute w-full h-full top-0 left-0"
        >
        </iframe>
      </div>
      <div class="mb-5"></div>
      <main
        data-color-mode="light"
        data-light-theme="light"
        data-dark-theme="dark"
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: readme }}
      >
      </main>
    </div>
  );
}
