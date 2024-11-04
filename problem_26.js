

function solution(text, markers){
   let lines = text.split('\n');
   let result = [];
      for(let i = 0 ; i < lines.length ; i++){
        let line =  lines[i];
        let char = '';
           for(j = 0 ; j < line.length ; j++){
              if(markers.includes(line[j])){
                 break;   
                }
                char += line[j];
            }
            result.push(char.trimEnd());
        }
        return result.join("\n");

}

const solutionProgram = solution("hrheif,  uhfuh  #  and fjeuhff \nofjio\nuhu\n  !iujgygy", ["#", '!']);
console.log(solutionProgram);