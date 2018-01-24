## Beginner's Project

[Live Demo](https://beginner-project.herokuapp.com/)
---

### How to run without Docker
- `git clone git@github.com:waskito/beginner-project.git`
- `cd beginner-project`
- `npm install`
- `npm run dev`

### How to run with Docker
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
- Tekan tombol sama dengan untuk mendapatkan hasilnya.

### Currency Converter
- Pilih mata uang asal (default USD),
- Pilih mata uang tujuan (default IDR),
- Masukkan nominal yang akan di-convert
- Tekan tombol `Convert`
- Akan muncul hasilnya

### Use Following Libraries / Components:
- [google-translate-api](https://github.com/matheuss/google-translate-api)
- [fixer.io](http://fixer.io/) (API for exchange rates)
- [money.js](https://github.com/openexchangerates/money.js/) (Manage exchange rates for currency converter)
- [react-scientific-calculator](https://github.com/mazury/react-scientific-calculator)
- [moment.js](https://github.com/moment/moment)
