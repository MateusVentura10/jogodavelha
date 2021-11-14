import WinnerControl from './Winner';
const useWinnerControl = WinnerControl();

const VerifyWinner = () => {
    return {
        row(player, callback){
            const input = document.querySelectorAll('input');
            const rowOne = [input[0], input[1], input[2]];
            const rowTwo = [input[3], input[4], input[5]];
            const rowThree = [input[6], input[7], input[8]];
        
            if(rowOne[0].value === rowOne[1].value && rowOne[0].value === rowOne[2].value && rowOne[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(rowOne);
        
            } else if(rowTwo[0].value === rowTwo[1].value && rowTwo[0].value === rowTwo[2].value && rowTwo[0].value !== "" ){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(rowTwo);
        
            } else if(rowThree[0].value === rowThree[1].value && rowThree[0].value === rowThree[2].value && rowThree[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(rowThree);
        
            } else callback(player, this.diagonal);
        },

        col(player, callback){
            const input = document.querySelectorAll('input');
            const colOne = [input[0], input[3], input[6]];
            const colTwo = [input[1], input[4], input[7]];
            const colThree = [input[2], input[5], input[8]];
        
            
            if(colOne[0].value === colOne[1].value && colOne[0].value === colOne[2].value && colOne[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(colOne);
        
            } else if(colTwo[0].value === colTwo[1].value && colTwo[0].value === colTwo[2].value && colTwo[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(colTwo);
        
            } else if(colThree[0].value === colThree[1].value && colThree[0].value === colThree[2].value && colThree[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(colThree);
        
            } else callback(player);
        },

        diagonal(player){
            const input = document.querySelectorAll('input');
            const diagonalOne = [input[0], input[4], input[8]];
            const diagonalTwo = [input[2], input[4], input[6]];
        
            if(diagonalOne[0].value === diagonalOne[1].value && diagonalOne[0].value === diagonalOne[2].value && diagonalOne[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(diagonalOne);
            }
        
            if(diagonalTwo[0].value === diagonalTwo[1].value && diagonalTwo[0].value === diagonalTwo[2].value && diagonalTwo[0].value !== ""){
                if(player % 2 !== 0) useWinnerControl.showWinner(1);
                else useWinnerControl.showWinner(2);
        
                useWinnerControl.inputStyleLost();
                useWinnerControl.inputStyleWinner(diagonalTwo);
            } 
        }

    }
}

export default VerifyWinner;