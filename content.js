const corsProxy = "https://cors-anywhere.herokuapp.com/";

const hyperlinks = document.querySelectorAll("a[href^='http']");
const internalLinks = document.querySelectorAll("a[href^='#'], a[href^='/']");
let linkStatus;

if (internalLinks.length) {
  internalLinks.forEach((link) => {
    link.addEventListener("mouseover", async () => {
      if (!linkStatus) {
        linkStatus = document.createElement("span");
        linkStatus.style.fontSize = "10px";
        linkStatus.style.padding = "5px";
        link.insertAdjacentElement("afterend", linkStatus);
      }
      linkStatus.textContent = `Internal Link`;
    });
    link.addEventListener("mouseout", () => {
      if (linkStatus) linkStatus.remove();
      linkStatus = null;
    });
  });
}

if (hyperlinks.length) {
  hyperlinks.forEach((link) => {
    link.addEventListener("mouseover", async () => {
      let res;
      try {
        res = await fetchLink(link.href);
      } catch (error) {
        res = await fetchLink(corsProxy + link.href);
        console.error(`Error Occurred - ${error}`);
      } finally {
        if (!linkStatus) {
          linkStatus = document.createElement("span");
          linkStatus.style.fontSize = "10px";
          linkStatus.style.padding = "5px";
          link.insertAdjacentElement("afterend", linkStatus);
        }
        linkStatus.textContent = `${res.status}`;
      }
    });
    link.addEventListener("mouseout", () => {
      if (linkStatus) linkStatus.remove();
      linkStatus = null;
    });
  });
}

const fetchLink = async (link) => {
  const response = await fetch(link, {
    method: "GET",
    mode: "cors",
  });
  return response;
};
