var twoSum = function(nums, target) {
    var arr = [];
    for (let i = 0; i < nums.length; i++){
        let flag = nums.indexOf(target-nums[i]);
        if(flag>-1){
            if(flag != i){
                arr.push(flag,i);
                break;
            }
        }
    }
    return arr
};

var ans = twoSum([1,2,3,4],3);
console.log(ans);