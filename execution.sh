docker build -t jmeter .
echo ('Created image JMeter')
IID=$(docker build -t jmeter .)
echo ('Saved CID')
docker run -d -p 80:80 $IID
docker run jmeter -n -t bin/dataChangeProposal.jmx -l ./bin/run1.jtl
echo 'Run test exec'
CID=$(docker run jmeter -n -t bin/dataChangeProposal.jmx -l ./bin/run1.jtl)
echo ('Saved $CID')
docker cp $CID:/opt/apache-jmeter-5.4.3/bin/run1.jtl
echo ('Test Result copied')
