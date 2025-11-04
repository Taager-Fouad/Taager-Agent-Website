  // ---- Sidebar Toggle ----
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));

    const countrySelect = document.getElementById("countrySelect");
    const container = document.getElementById("categoriesContainer");
    const iframeContainer = document.getElementById("iframes");
    const homePage = document.getElementById("homePage");
    const homeBtn = document.getElementById("homeBtn");
    const loader = document.getElementById("loader");

      function copyText(icon) {
  const container = icon.parentElement; 
  const textContent = container.querySelector('.text-content');
  const message = container.querySelector('.copy-message');

  navigator.clipboard.writeText(textContent.innerText).then(() => {
    message.classList.add('show');
    setTimeout(() => {
      message.classList.remove('show');
    }, 1500);
  });
};

    const openInNewTab = [
      "https://taager.com/eg/home",
      "https://chatgpt.com/",
      "https://mail.outhyre.co/",
      "https://web.whatsapp.com/",
      "https://www.google.com/",
      "https://slack.com/get-started#/createnew",
      "https://qrfy.io/p/SahggibJmw?utm_source=qrcode&utm_medium=link-list&utm_campaign=42549487",
      "https://dialer3.etisalna.com/agc/vicidial.php",
      "https://iam.cloud.unifonic.com/",
      "https://translate.google.com/?sl=ar&tl=en&op=translate",
      "https://www.google.com/maps?authuser=0",
      "https://starship.taager.com/",
      "https://script.google.com/macros/s/AKfycbxI3igLlwr6hLcaby8sGx3jpg1gxfRwad4Nf2OcWXDCKP4vUF6TgpaBKsme0HsIRmM9/exec",
      "https://iam.cloud.unifonic.com/auth/realms/unifonic-cloud/protocol/openid-connect/auth?state=3735867893de95fa4f733ba829cb382f&scope=profile%20email%20openid&response_type=code&approval_prompt=auto&redirect_uri=https://console-api.cloud.unifonic.com/iam-login&client_id=unifonic-cloud&expiresAfter=1760452183"
    ];

    const countries = {
      egypt: [
        {
          name: "Sheets",
          links: [
            { name: "Sept MTD EGY Performance", link: "https://docs.google.com/spreadsheets/d/1khby0o7b7Wnrokv72kDXz-eHlX_ztpb6RH5VxJ4BxJA/edit?gid=0#gid=0" },
            { name: "Oct MTD EGY Performance", link: "https://docs.google.com/spreadsheets/d/1uZCDyoC83xkaaW5bfvDPtVBuhS39EBXf_ET4BFbzYX0/edit?pli=1&gid=0#gid=0" },
            { name: "Nov MTD EGY Performance", link: "https://docs.google.com/spreadsheets/d/1Tv1oJHtgtwj9tQO_LHDIfnfCiuAPztgjBNeW9rX2m5s/edit?gid=0#gid=0" },
            { name: "Discount Sheet", link: "https://docs.google.com/spreadsheets/d/1TzCg16ZrDn_xMYVAM6Z30O4WrXYNwA1a9JYl1j7D5Jo/edit?gid=10481039#gid=10481039" },
            { name: "Upselling", link: "https://docs.google.com/spreadsheets/d/1Y8FQwslCwSkodZqwwoPa5zmT1Icn15jZO3hJ-AphMF4/edit?gid=400656243#gid=400656243" },
            { name: "Schedule EGY", link: "https://docs.google.com/spreadsheets/d/1hKdD1mH-6_FM35YRqrxfeaLoqn2fmlyKjxJ-TsvwDyY/edit?pli=1&gid=1118150853#gid=1118150853" },
            { name: "Total Inventory Counts EGY", link: "https://docs.google.com/spreadsheets/d/16JvfRl6AdX47DrxLFsTAkkbh6lsgwYafAFgVWxWRR3Q/edit?gid=0#gid=0" },
            { name: "Product's SKUs", link: "https://docs.google.com/spreadsheets/d/16RdIl__qEbsl6avBalZQee3kOgwDXgDViH1l-u9T44k/edit?pli=1&gid=0#gid=0" },
            { name: "Products Details | Call Center", link: "https://docs.google.com/spreadsheets/d/18pY8NBeCssLwMKKLM9O4DqZSJSZOP9gNtfhSu4IZtvM/edit?gid=0#gid=0" },
            { name: "New Guideline / Cancellation Reasons", link: "https://docs.google.com/spreadsheets/d/1VjlicCHV2sPnwyuuB4JeET4zSeXq0bK6Gl-1PA2VEeE/edit?gid=1135246785#gid=1135246785" },
            { name: "Red/Green Zones Updates", link: "https://docs.google.com/spreadsheets/d/1ifWEUD61PYLNihtcyDFTzxehQxg6bIKtrQTJsEj2W04/edit?gid=1829068315#gid=1829068315" },
            { name: "Cancellation Scripts EGY", link: "https://docs.google.com/presentation/d/1y-mZeUu4eujpUZ0qjsa6NDixkCz6c2eZaAUjN-c7ZIQ/edit?slide=id.g37f2c930785_0_107#slide=id.g37f2c930785_0_107" },
            { name: "New Rejected Reason", link: "https://docs.google.com/spreadsheets/d/1Bxkjv3yTAY7RWi1mep7-bwwhmMMGew_m-F5c-ucV468/edit?gid=0#gid=0" }
          ]
        },
        {
          name: "QA Sheets",
          links: [
            { name: "Mostafa Team", link: "https://docs.google.com/spreadsheets/d/11IMZaf2pseCqW5tH4SW3vkm8AzDGrcwmRSFCBIebIBc/edit?pli=1&gid=0#gid=0" },
            { name: "Yara Team", link: "https://docs.google.com/spreadsheets/d/1ytEzomjDxs2HshUTIWnmPdT6YfMFYBF2lrggVlsnL6Q/edit?gid=0#gid=0" },
            { name: "Hawazen Team", link: "https://docs.google.com/spreadsheets/d/1DoEa55xkXRHoZpjklUoYE6UdgYt7DK2BgehFQ9ahiKk/edit?gid=0#gid=0" },
          ]
        },
        {
          name: "Forms",
          links: [
            { name: "FAQs", link: "https://docs.google.com/forms/d/e/1FAIpQLSd9s-45X3e-g4y3HmOugNmb4ivYhKDMdzlvyPrXCUaQXH2kgw/viewform" },
            { name: "EGY Postpone", link: "https://docs.google.com/forms/d/e/1FAIpQLSdmE8hKNJ38rnRPr-Wgu7JoIH42ObSSF9Xw9Ww8fOTWmvUlyA/viewform" }
          ]
        },
                {
          name: "Sites",
          links: [
            { name: "Dukkank", link: "https://dukkank.com/" },
            { name: "Taager", link: "https://taager.com/eg/home" },
            { name: "Starship", link: "https://starship.taager.com/" },
            { name: "Realtime & Breaks", link: "https://taager-fouad.github.io/EGY-Realtime-Breaks-View/" },
            { name: "ChatGPT", link: "https://chatgpt.com/" },
            { name: "Mail", link: "https://mail.outhyre.co/" },
            { name: "WhatsApp", link: "https://web.whatsapp.com/" },
            { name: "Google", link: "https://www.google.com/" },
            { name: "Google maps", link: "https://www.google.com/maps?authuser=0" },
            { name: "Google translate", link: "https://translate.google.com/?sl=ar&tl=en&op=translate" },
            { name: "Slack", link: "https://slack.com/get-started#/createnew" }
          ]
        },
      ],
      ksa: [
        {
          name: "Sheets",
          links: [
            { name: "Schedule KSA", link: "https://docs.google.com/spreadsheets/d/1-IgDZ5BrrHgwrbammToKXN32AyYjbJxM_6jnWe9qWF4/edit?pli=1&gid=0#gid=0" },
            { name: "PRODUCT", link: "https://docs.google.com/spreadsheets/d/19UPFzlEU54Y_Ew3Gdn3wLvltJYtcjjXtEQ-7RWEcOb8/edit?gid=1964982909#gid=1964982909" },
            { name: "New Rejected Reason", link: "https://docs.google.com/spreadsheets/d/1Bxkjv3yTAY7RWi1mep7-bwwhmMMGew_m-F5c-ucV468/edit?gid=0#gid=0" },
            { name: " Confirmation address challenges", link: "https://docs.google.com/spreadsheets/d/1eANEA1ENGEeH0r0ctOw4B6k22Cg6Dr9YyM5MQQTzmXI/edit?gid=0#gid=0" }

          ]
        },        
        {
          name: "Forms",
          links: [
            { name: "KSA Postpone", link: "https://docs.google.com/forms/d/e/1FAIpQLSeefFLfPUGnJq1IWKYAMcgJbwJodZF9Sb4bfmfOZd3xTugztA/viewform?pli=1&pli=1" },
            { name: "WhatsApp KSA", link: "https://docs.google.com/forms/d/e/1FAIpQLSdftmKh56EWr5uBmnpJVNg89TPSPXuv0L4D_bmlnCrLZwLaeA/viewform" },
            { name: "Form KSA After sales Inquiry", link: "https://docs.google.com/forms/d/e/1FAIpQLSeJfxzflnaX06lukrdZQLWIzgdPecDacnlbNrjO_NMHx0WDKA/viewform" },
            { name: "DOZN", link: "https://qrfy.io/p/SahggibJmw?utm_source=qrcode&utm_medium=link-list&utm_campaign=42549487" },
          ]
        },
        {
          name: "Sites",
          links: [
            { name: "Taager", link: "https://taager.com/eg/home" },
            { name: "ChatGPT", link: "https://chatgpt.com/" },
            { name: "Mail", link: "https://mail.outhyre.co/" },
            { name: "WhatsApp", link: "https://web.whatsapp.com/" },
            { name: "Google", link: "https://www.google.com/" },
            { name: "Google maps", link: "https://www.google.com/maps?authuser=0" },
            { name: "Google translate", link: "https://translate.google.com/?sl=ar&tl=en&op=translate" },
            { name: "Slack", link: "https://slack.com/get-started#/createnew" }
          ]
        },
      ],
      iraq: [
        {
          name: "Sheets",
          links: [
            { name: "#IRQ | Tele-Sales / Upselling Products", link: "https://docs.google.com/spreadsheets/d/1E-mzRFs1SnijJ3cCBGfhPiC_rcZcz0mS11AFN3rcOCY/edit?gid=1155646810#gid=1155646810" },
            { name: "IRQ Product Directory", link: "https://docs.google.com/spreadsheets/d/1SNN45XK0_CIWVr3LXSlVJzDrq-6W-IqDmFqC9ntBg08/edit?gid=0#gid=0" },
            { name: "التاجر طلبات المحافظات الشمالي الممنوعة", link: "https://docs.google.com/spreadsheets/d/1mVHgOeqsk_M-LJKeGiKLSXsZETgHa45-uYVJgPHvx3c/edit?gid=1712209157#gid=1712209157" },
            { name: "New Rejected Reason", link: "https://docs.google.com/spreadsheets/d/1Bxkjv3yTAY7RWi1mep7-bwwhmMMGew_m-F5c-ucV468/edit?gid=0#gid=0" },
            { name: "Schedule", link: "https://docs.google.com/spreadsheets/d/1hKdD1mH-6_FM35YRqrxfeaLoqn2fmlyKjxJ-TsvwDyY/edit?gid=1741671021#gid=1741671021" }
          ]
        },
        {
          name: "Forms",
          links: [
            { name: "Iraq Postpone sheet", link: "https://docs.google.com/forms/d/e/1FAIpQLSdfji_zaWHAXwkRnK6BZFdZlvR9vl7HWIb8zC4oOuH-gHHw7A/viewform?pli=1&pli=1" }
          ]
        },
        {
          name: "Sites",
          links: [
            { name: "Dialer", link: "https://dialer3.etisalna.com/agc/vicidial.php" },
            { name: "Taager", link: "https://taager.com/eg/home" },
            { name: "ChatGPT", link: "https://chatgpt.com/" },
            { name: "Mail", link: "https://mail.outhyre.co/" },
            { name: "WhatsApp", link: "https://web.whatsapp.com/" },
            { name: "Google", link: "https://www.google.com/" },
            { name: "Google maps", link: "https://www.google.com/maps?authuser=0" },
            { name: "Google translate", link: "https://translate.google.com/?sl=ar&tl=en&op=translate" },
            { name: "Slack", link: "https://slack.com/get-started#/createnew" }
          ]
        },
      ],
      gcc: [
        {
          name: "Sheets",
          links: [
            { name: "New Rejected Reason", link: "https://docs.google.com/spreadsheets/d/12VjkKrsRm7-X-3bf4BwoRruxDizxI1gCnjnBbe_Cw7E/edit?invite=CLD8xb0B&gid=0#gid=0" },
            { name: "Target GCC Guide", link: "https://docs.google.com/spreadsheets/d/1tMl7vfA2-SqIExsal5mO89_xMz1Fryx8wxNUFJsCQ_w/edit?gid=0#gid=0" },
            { name: "Website image", link: "https://docs.google.com/spreadsheets/d/1pRtZDHTbw_38HidOIb0kKc3wpFwF3zsNZYIfwU3wvKU/edit?gid=2019802967#gid=2019802967" },
            { name: "City List", link: "https://docs.google.com/spreadsheets/d/1zpumjmRrkPTxPiaMcJLyZSxbhJo1niv5/edit?gid=465191669#gid=465191669" },
            { name: "Schedule", link: "https://docs.google.com/spreadsheets/d/1hKdD1mH-6_FM35YRqrxfeaLoqn2fmlyKjxJ-TsvwDyY/edit?pli=1&gid=1211972237#gid=1211972237" },
            { name: "GCC upselling", link: "https://docs.google.com/spreadsheets/d/1PsP_eYVJJt3tUDtIXewC3Qq7T78Kfbf5Iiwu6jTeSGg/edit?gid=722009171#gid=722009171" },
          ]
        },
        {
          name: "Forms",
          links: [
            { name: "Merchant form  Issues", link: "https://docs.google.com/forms/d/e/1FAIpQLSfiTM70rEpw8Wtk0DYev-9vkfvdmS-qO3SUBpz-UOF50Ub1EA/viewform" },
            { name: "postpone form  GCC", link: "https://docs.google.com/forms/d/e/1FAIpQLSfiTM70rEpw8Wtk0DYev-9vkfvdmS-qO3SUBpz-UOF50Ub1EA/viewform" },

          ]
        },
        {
          name: "Sites",
          links: [
            { name: "Unifonic", link: "https://iam.cloud.unifonic.com/auth/realms/unifonic-cloud/protocol/openid-connect/auth?state=3735867893de95fa4f733ba829cb382f&scope=profile%20email%20openid&response_type=code&approval_prompt=auto&redirect_uri=https://console-api.cloud.unifonic.com/iam-login&client_id=unifonic-cloud&expiresAfter=1760452183" },
            { name: "Taager", link: "https://taager.com/eg/home" },
            { name: "ChatGPT", link: "https://chatgpt.com/" },
            { name: "Mail", link: "https://mail.outhyre.co/" },
            { name: "WhatsApp", link: "https://web.whatsapp.com/" },
            { name: "Google", link: "https://www.google.com/" },
            { name: "Google maps", link: "https://www.google.com/maps?authuser=0" },
            { name: "Google translate", link: "https://translate.google.com/?sl=ar&tl=en&op=translate" },
            { name: "Slack", link: "https://slack.com/get-started#/createnew" }
          ]
        },
      ]
    };

    function safeIdFromLink(link) { return 'frame_' + encodeURIComponent(link); }
    function showLoader() { loader.style.display = 'block'; }
    function hideLoader() { loader.style.display = 'none'; }

    function renderCountry(country) {
      container.innerHTML = "";
      countries[country].forEach(cat => {
        const catDiv = document.createElement("div");
        catDiv.className = "category";
        catDiv.innerHTML = `<span>${cat.name}</span><span class="arrow">▶</span>`;
        const list = document.createElement("div");
        list.className = "tab-list";

        cat.links.forEach(item => {
          const iframeId = safeIdFromLink(item.link);
          const tab = document.createElement("button");
          tab.className = "tab";
          tab.innerHTML = `
            <span>${item.name}</span>
            ${openInNewTab.includes(item.link) ? "" : '<span class="reload" title="Reload">&#x21bb;</span>'}
          `;

          tab.addEventListener("click", () => {
            if (openInNewTab.includes(item.link)) { window.open(item.link, "_blank"); return; }

            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll("iframe").forEach(f => f.classList.remove("active"));
            homePage.classList.remove("active");
            homePage.style.display = "none";

            tab.classList.add("active");
            showLoader();

            let iframe = document.getElementById(iframeId);
            if (!iframe) {
              iframe = document.createElement("iframe");
              iframe.id = iframeId;
              iframe.src = item.link;
              iframe.className = "active";
              iframe.addEventListener("load", () => hideLoader());
              iframeContainer.appendChild(iframe);
            } else {
              iframe.classList.add("active");
              hideLoader();
            }

            sidebar.classList.remove("open");
          });

          if (!openInNewTab.includes(item.link)) {
            const reloadEl = tab.querySelector(".reload");
            if (reloadEl) {
              reloadEl.addEventListener("click", (e) => {
                e.stopPropagation();
                const iframe = document.getElementById(iframeId);
                if (iframe) {
                  showLoader();
                  const cur = iframe.src;
                  iframe.src = '';
                  setTimeout(() => { iframe.src = cur; }, 150);
                  iframe.addEventListener("load", () => hideLoader());
                }
              });
            }
          }

          list.appendChild(tab);
        });

        catDiv.addEventListener("click", () => {
          catDiv.classList.toggle("open");
          list.classList.toggle("open");
        });

        container.appendChild(catDiv);
        container.appendChild(list);
      });
    }

    countrySelect.addEventListener("change", (e) => renderCountry(e.target.value));

    homeBtn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll("iframe").forEach(f => f.classList.remove("active"));
      homePage.style.display = "block";
      homePage.classList.add("active");
      sidebar.classList.remove("open");
    });

    renderCountry("egypt");

    document.querySelectorAll(".home-block-header").forEach(header => {
      header.addEventListener("click", () => {
        const block = header.parentElement;
        block.classList.toggle("active");
      });
    });
    
