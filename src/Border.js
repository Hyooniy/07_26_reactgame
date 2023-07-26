import rock from './images/rock.png'
import scissors from './images/scissors.png'
import paper from './images/paper.png';

const RSP = {
  rock: rock,
  scissors: scissors,
  paper: paper,
}
export default function Border({value}){
  const rsp = RSP [value];
  return(
    <img src={rsp} alt={value} />
  )
}