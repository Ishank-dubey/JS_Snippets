#!/bn/bash
#set -x
OSS=$1
oss={OSS}
#format=yyyymmdd
date1=$2
#format=dd-mm-yyyy
date2=`date -d $date1 +%d-%m-%Y`
echo $date2

querypath=/Desktop/CSVs/path.sh

outputPath_main=./${date1}/$oss

csvfile=function.txt
mkdir -p $outputPath_main
counter=0
names=()
test="pmresult_"
num=_60
while IFS='' read -r line || [[ -n "$line" ]]; 
do
dn=$(echo $line | tr -d '\r')
names[$counter]=${test}${dn}${num}
counter=$(($counter+1))
done < $csvfile
#echo ${names[@]}


allnames=()
counter=0
for i in $names 
do 
time=0

while [ $time -le 2300 ]
do
   
   printf -v padded "%04d" $time
   printf -v paddednext "%04d" $(($time+100))
   if [ $time -lt 2300 ]
   then
   allnames[$counter]=${i}_${date1}${padded}_${date1}${paddednext}
   fi
   
   if [ $time -eq 2300 ]
   then
      allnames[$counter]=${i}_${date1}${time}_${date1}"0000"
      break
   fi
   counter=$(($counter+1))
   time=$(($time+100))
done
done
echo ${allnames[@]}


for file in $(ls ./${date1}/${OSS})
do

head -n1 "./${date1}/${OSS}/${file}" | sed -e 's/\(.*\)/\L\1/' | sed -e "s/ /_/g" | sed 's/[0-9][0-9]*/t_&/g'

tail -n +3 "./${date1}/${OSS}/${file}"


done
