
var longestCommonPrefix = function(strs) {
    res=strs[0]
    for(let i=0;i<strs.length; i++){
        // console.log(strs[i])
        // for(let k=0; k<strs[i].length; k++){
        //     // console.log(i,k, strs[i][k])
        //     if(strs[i][k])
        // }
        while(strs[i].indexOf(res)!==0){
            res = res.substring(0, res.length - 1);
            console.log(res)
        }
    }
};

strs=["flower","flow","flight"]
// strs=["nirmal","nir","ni"]
longestCommonPrefix(strs)
