import readlineSync from 'readline-sync';



const playRound = () => {   
    
    let computerAnsw;
    let random = Math.round(Math.random() * 3);
    if (random === 0) {
        computerAnsw = 'Камень';
    } else if (random === 1) {
        computerAnsw = 'Ножницы';
    } else {
        computerAnsw = 'Бумага';
    }
    
      
    let arrayAnswers = ['Камень', 'Ножницы', 'Бумага'];
    let i = readlineSync.keyInSelect(arrayAnswers, 'Каков ваш выбор?'); 
    let playerAnsw = arrayAnswers[i];
       
   
    console.log('Вы выбрали:  ' + playerAnsw);

    console.log('Компьютер выбрал:  ' + computerAnsw);

    if (playerAnsw === computerAnsw) {
        console.log('Ничья!');

    } else if ((playerAnsw === 'Камень' && computerAnsw === 'Ножницы') || (playerAnsw === 'Ножницы' && computerAnsw === 'Бумага') ||(playerAnsw === 'Бумага' && computerAnsw === 'Камень')) {
        console.log('Вы победили!');
        
    } else {
        console.log('В этом раунде победил компьютер :(');
        
    }
};



const doesPlayerWantsToPlay = () => {
    return readlineSync.keyInYNStrict('Хотите сыграть еще?');
};    

const continuation = () => {
    while (doesPlayerWantsToPlay() === true) {
        console.log('Новый раунд ждет!\n');
        playRound();
        doesPlayerWantsToPlay();
        if (doesPlayerWantsToPlay() === false){
            console.log('До встречи!');
            break;
        } 
    } 
};  
      



playRound();
continuation();