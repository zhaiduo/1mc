#!/bin/bash

#grep -m1 -ao '[0-9]' /dev/urandom | sed s/0/10/ | head -n1
#$(( ( RANDOM % 10 )  + 1 )) >> data.txt
touch data.txt
echo "" > data.txt
for i in {1..10000000}
do
    echo $(( ( RANDOM % 10 )  + 1 )) >> data.txt
done
#while :; do ran=$RANDOM; ((ran < 32760)) && echo $(((ran%10)+1)) >> data.txt  && break; done
echo "Done"


