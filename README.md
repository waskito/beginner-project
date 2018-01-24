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


