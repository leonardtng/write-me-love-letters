import { adverbs, altSalutationsFemale, altSalutationsMale, bodyPartsFemale, bodyPartsMale, recipientAdjectives, recipientNouns, senderAdjectives, senderNouns, verbs } from "../@constants/wordBank";
import { defaultSentencesSet1, defaultSentencesSet2, forHerSentences, forHimSentences } from '../@constants/sentenceBank';
import { LoveLetter } from "../@types";

const getRandom = (arr: Array<string>) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const toTitleCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
};

const generateLetter = (recipient?: string, sender?: string, recipientGender: string | null = 'female') => {
  const salutation =
    `${toTitleCase(getRandom(recipientAdjectives))}
  ${recipient ? recipient : toTitleCase(recipientGender === 'female' ? getRandom(altSalutationsFemale) : getRandom(altSalutationsMale))},
  `
  const generated1 =
    `My ${getRandom(senderAdjectives)}
  ${getRandom(senderNouns)}
  ${getRandom(adverbs)} 
  ${getRandom(verbs)} 
  your 
  ${getRandom(recipientNouns)}.
  `

  const generated2 =
    `You are my ${getRandom(senderAdjectives)} 
  ${getRandom(senderNouns)}.
  `

  const generated3 =
    `My ${getRandom(senderNouns)} 
  ${getRandom(verbs)} 
  for your 
  ${getRandom(recipientNouns)}. 
  `

  const generated4 =
    `Your ${getRandom(recipientAdjectives)} 
  ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)} 
  is my 
  ${getRandom(senderAdjectives)} 
  ${getRandom(senderNouns)}. 
  `

  const generated5 = `
  I am so happy to wake up to your 
  ${getRandom(recipientAdjectives)} 
  ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)}, 
  your ${getRandom(recipientAdjectives)} 
  ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)}, 
  and ${getRandom(recipientAdjectives)} 
  ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)}. `

  const generated6 =
    `You are my ${getRandom(senderAdjectives)} 
  ${getRandom(senderNouns)}: 
  A ${getRandom(recipientAdjectives)} 
  ${getRandom(recipientNouns)}. 
  `

  const sentences = [
    generated1, 
    generated2, 
    generated3, 
    generated4, 
    generated5, 
    getRandom(defaultSentencesSet1), 
    getRandom(defaultSentencesSet2), 
    getRandom(recipientGender === 'female' ? forHerSentences : forHimSentences)
  ]

  const body = sentences.sort(() => Math.random() - 0.5).join('') + generated6

  const signOff = `Yours ${getRandom(adverbs)}, `
  const senderName = `${sender ? sender : 'Anonymous'}`

  const letter: LoveLetter = { generated: true, salutation: salutation, body: body, signOff: signOff, sender: senderName }

  return letter
}

export { generateLetter }