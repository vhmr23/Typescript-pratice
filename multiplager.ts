const multiple = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
}

const parseArguments = (args): Array<number> => {
  if(args.length !== 4) throw new Error('wrong number of arguments')

  const fristNumber = Number(args[2]);
  const secondNumber = Number(args[3]);

  if(!isNaN(fristNumber) && !isNaN(secondNumber)) {
    return [fristNumber, secondNumber]
  } else {
    throw new Error('provided values were not numbers!')
  }
}

const cleanArguments = parseArguments(process.argv);

const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

multiple(a, b, 'Result is: ');