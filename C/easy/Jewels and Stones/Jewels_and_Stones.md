# Jewels and Stones

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.



## submission solution

```c
int numJewelsInStones(char* J, char* S) {
    int total_stone = strlen(S);
    int total_jewel = strlen(J);
    int list[50] = {0};
    int ans = 0;
    
    for(int i=0 ; i<total_jewel ; i++){
        char jewel = *(J+i);
        for(int k=0 ; k<total_stone ; k++){
            char stone = *(S+k); 
            if( list[k] == 0 && jewel == stone ){
                list[k] = 1;
            }
        }
    }
    for(int i=0 ; i<total_stone ; i++){
        if( list[i] == 1){
            ans++;
        }
    }
    return ans;
}


```

![Jewels and Stones.png](./Jewels and Stones.png)