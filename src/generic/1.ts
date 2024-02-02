function getPromise<T extends (string | number)[]>() {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
