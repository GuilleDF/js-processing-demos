async function main() {
  const { getStringA } = await import('./a');
  console.log(getStringA());

  const { getStringB } = await import('./b');
  console.log(getStringB());
}

main();
