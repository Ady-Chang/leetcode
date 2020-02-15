# umber of Steps to Reduce a Number to Zero





## submission solution

```c

int numberOfSteps (int num){
    if(num == 0){
        return 0;
    };

    int remain = num;
    int count = 0;
    
    while(remain != 0){
        if(remain %2 != 0){
            remain -= 1;
            count++;
            continue;
        }
        remain /= 2;
        count++;
    }
    return count;    
}

```

![Number_of_Steps_to_Reduce_a_Number_to_Zero.png](./Number_of_Steps_to_Reduce_a_Number_to_Zero.png)