#!/bin/bash

PID=`ps aux|grep 'npm run go'|awk '{print $2}'|head -n 1`
dtrace -x ustackframes=100 -n 'profile-97 /pid == ${PID}/ { @[ustack()] = count(); } tick-3s { exit(0); }' -o stacks.out
