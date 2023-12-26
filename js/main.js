let bir = 0;
let inf = [];
let hisob = 0;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  bir++;
  const inpWord = inp.value;
  const res = await search(inpWord);
  const bittasi = res[0];
  console.log(bittasi);
  const inform = {
    word: bittasi.word,
    oqilishi: bittasi.phonetic,
    noune: {
      definitions: bittasi.meanings[0].definitions,
      synonyms: bittasi.meanings[0].synonyms,
    },
    verb: {
      definitions: bittasi.meanings[0].definitions,
    },
  };
  inf.push(inform);
  inp.value = "";
  reBody();
});

function reBody() {
  inf.forEach((e) => {
    if (bir < 2) {
      nameEl.textContent = e.word;
      aytilishi.textContent = e.oqilishi;
      audeo.addEventListener("click", () => {
        hisob++;
        readText(e.word);
      });
      let defenOT = [
        e.noune.definitions[0].definition,
        e.noune.definitions[1].definition,
        e.noune.definitions[2].definition,
      ];
      let defenVerb = [
        e.verb.definitions[3].definition,
        e.verb.definitions[4].definition,
        e.verb.definitions[5].definition,
      ];

      let synonem = [e.noune.synonyms[0], e.noune.synonyms[1]];
      noneMean.innerHTML = `<div class="flex gap-[20px] md:ml-4 items-center">
        <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
        <p class="text-15px" id="meanig">
          ${defenOT[0]}
        </p>
      </div><div class="flex gap-[20px] md:ml-4 items-center">
      <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
      <p class="text-15px" id="meanig">
        ${defenOT[1]}
      </p>
    </div><div class="flex gap-[20px] md:ml-4 items-center">
    <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
    <p class="text-15px" id="meanig">
      ${defenOT[2]}
    </p>
  </div>`;
      synonemm.innerHTML = `${synonem[0]},${synonem[1]}`;
      verbMean.innerHTML = ` <div class="flex gap-[20px] md:ml-4 items-center">
      <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
      <p class="text-15px" id="meanig">
        ${defenVerb[1]}
      </p>
    </div><div class="flex gap-[20px] md:ml-4 items-center">
    <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
    <p class="text-15px" id="meanig">
      ${defenVerb[2]}
    </p>
  </div><div class="flex gap-[20px] md:ml-4 items-center">
  <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
  <p class="text-15px" id="meanig">
    ${defenVerb[3]}
  </p>
</div>`;
    } else {
      const alohida = inf[0 + bir - 1];
      aytilishi.textContent = alohida.oqilishi;
      if (hisob == 1) {
        audeo.addEventListener("click", () => {
          readText("", alohida.word, "");
        });
      }
      let defenOT1 = [
        alohida.noune.definitions[0].definition,
        alohida.noune.definitions[1].definition,
        alohida.noune.definitions[2].definition,
      ];
      let defenVerb1 = [
        alohida.verb.definitions[3].definition,
        alohida.verb.definitions[4].definition,
        alohida.verb.definitions[5].definition,
      ];
      let synonem = [alohida.noune.synonyms[0], alohida.noune.synonyms[1]];
      nameEl.textContent = alohida.word;
      noneMean.innerHTML = `<div class="flex gap-[20px] items-center">
      <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
      <p class="text-15px" id="meanig">
        ${defenOT1[0]}
      </p>
    </div><div class="flex gap-[20px] items-center">
    <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
    <p class="text-15px" id="meanig">
      ${defenOT1[1]}
    </p>
  </div><div class="flex gap-[20px] items-center">
  <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
  <p class="text-15px" id="meanig">
    ${defenOT1[2]}
  </p>
</div>`;
      synonemm.innerHTML = `${synonem[0]},${synonem[1]}`;
      verbMean.innerHTML = ` <div class="flex gap-[20px] items-center">
    <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
    <p class="text-15px" id="meanig">
      ${defenVerb1[1]}
    </p>
  </div><div class="flex gap-[20px] items-center">
  <img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
  <p class="text-15px" id="meanig">
    ${defenVerb1[2]}
  </p>
</div><div class="flex gap-[20px] items-center">
<img src="./images/Oval (9).svg" class="w-[5px] h-[5px]" alt="" />
<p class="text-15px" id="meanig">
  ${defenVerb1[3]}
</p>
</div>`;
    }
  });
}
