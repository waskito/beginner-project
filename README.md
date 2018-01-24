## Beginner's Project

[Live Demo](https://beginner-project.herokuapp.com/)
---

### How to run without Docker
- `git clone git@github.com:waskito/beginner-project.git`
- `cd beginner-project`
- `npm install`
- `npm run dev`
- Open your browser at http://localhost:3000

### How to run with Docker
- `git clone git@github.com:waskito/beginner-project.git`
- `cd beginner-project`
- `docker build -t beginner-project .`
- `docker run -itd -p 9000:9000 -e PORT=9000 --name=b-pro beginner-project`
- Open your browser at http://localhost:9000

### Translator
- Pilih bahasa yang ingin di-translate (default Indonesian)
- Pilih bahasa tujuan (default engilsh)
- Masukkan kata / kalimat / paragraf yang ingin di-translate,
- Tekan tombol `Translate`, dan tunggu beberapa saat,
- Pastikan terkoneksi ke Internet
- Akan muncul hasilnya

### Calculator
- Tekan angka atau operator yang ingin dicari hasilnya,
- Tekan tombol `=` untuk mendapatkan hasilnya.

### Currency Converter
- Pilih mata uang asal (default USD),
- Pilih mata uang tujuan (default IDR),
- Masukkan nominal yang akan di-convert
- Tekan tombol `Convert`
- Akan muncul hasilnya

### Use Following Libraries / Components:
- [google-translate-api](https://github.com/matheuss/google-translate-api) (Library for using Google Translate API without token)
- [fixer.io](http://fixer.io/) (API to get exchange rates)
- [money.js](https://github.com/openexchangerates/money.js/) (Manage exchange rates for currency converter)
- [numeral](https://github.com/adamwdraper/Numeral-js) (For formatting currency result)
- [moment.js](https://github.com/moment/moment) (To check latest date of exchange rates from fixer)
- [local-storage](https://github.com/bevacqua/local-storage/) (Caching currency rates in the browser with localStorage)
- [react-scientific-calculator](https://github.com/mazury/react-scientific-calculator) (Use it as a component)