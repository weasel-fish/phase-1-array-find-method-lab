function superbowlWin(record) {
    const win = record.find(elem => elem.result === 'W');
    if(win){
        return win.year;
    } else {
        return undefined;
    }
    
}