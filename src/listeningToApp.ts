const app = require('./index');

const port = 3000;

app.listen(port, (): void => {
  console.log(`server is running on http://localhost:${port}`);
});
