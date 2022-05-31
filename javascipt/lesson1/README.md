Docker Build
`sudo docker build -t my-node-latest .`

Docker Run
`
sudo docker run \
    -v $PWD/lesson1.js:/app/lesson1.js \
    my-node-latest \
    node lesson1.js
`

$ can be used to run inline commands
$PWD instead of using absolute paths
