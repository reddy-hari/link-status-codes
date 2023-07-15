const corsProxy = "https://cors-anywhere.herokuapp.com/";

const hyperlinks = document.querySelectorAll("a[href^='http']");
const internalLinks = document.querySelectorAll("a[href^='#'], a[href^='/']");
let linkStatus;

if (hyperlinks.length) {
  hyperlinks.forEach((link) => {
    link.addEventListener("mouseover", async () => {
      try {
        const res = await fetchLink(link.href);
        // console.log(res);
        if (res.status == 200 && res.ok) {
          console.log(`Link is good.`);
          if (!linkStatus) {
            linkStatus = document.createElement("span");
            linkStatus.style.fontSize = "10px";
            linkStatus.style.padding = "5px";
            link.insertAdjacentElement("afterend", linkStatus);
          }
          linkStatus.textContent = `${res.status}`;
        }
        if (res.status == 404) console.log(`Link returned a 404.`);
      } catch (error) {
        console.log(`Possibly broken link`);
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
    method: "HEAD",
  });
  return response;
};
