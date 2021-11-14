import VerifyWinner from './VeriftyWinner';
const useVerifyWinner = VerifyWinner();

export default function WinnerControl(){
    return {
        verify(player){
            useVerifyWinner.row(player, useVerifyWinner.col);
        },

        showWinner(player){
            document.querySelector('.winner').style = 'opacity: 1';
            document.querySelector('.winner').innerHTML = `Jogador ${player} venceu`;
        },
        
        inputStyleWinner(input){
            input.forEach(el => {
                if(el.value === 'X' || el.value === 'x') el.style = "background:#f47373; color:white; opacity: 1";
                if(el.value === 'O' || el.value === 'o') el.style = "background:#64b5f6; color:white; opacity: 1";
            })
        },
        
        inputStyleLost(){
            document.querySelectorAll('.input').forEach(input => {
                input.setAttribute('readonly', true);

                if(input.value === 'X' || input.value === 'x') input.style = "background:#f47373; color:white; opacity: 0.7";
                if(input.value === 'O' || input.value === 'o') input.style = "background:#64b5f6; color:white; opacity: 0.7";
                if(input.value === "") input.style = "opacity: 0.7";
            });
        }
    }
}
