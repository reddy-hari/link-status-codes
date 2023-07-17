const corsProxy = "http://localhost:4000/proxy/";

const links = document.querySelectorAll(
  "a[href^='http'], a[href^='#'], a[href^='/']"
);
let linkStatus;

links.forEach((link) => {
  link.addEventListener("mouseover", async () => {
    let res;
    try {
      res = await fetchLink(link.href);
    } catch (error) {
      res = await fetchLink(corsProxy + link.href);
      console.error(`Error Occurred - ${error}`);
    } finally {
      link.title = `${res.status}`;
    }
  });

  link.addEventListener("mouseout", () => {
    link.title = "";
  });
});

const fetchLink = async (link) => {
  const response = await fetch(link, {
    method: "GET",
    mode: "cors",
  });
  return response;
};
