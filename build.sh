#!/bin/bash

echo "Start...";
STARTSCRIPTTIME=$(date +%s);

##
 # Install npm dependencies.
 #
echo "Install npm dependencies.";
STARTTIME=$(date +%s);
rm -rf node_modules && npm install;
ENDTIME=$(date +%s);
echo "Done at $(($ENDTIME - $STARTTIME))s.";

##
 # Run tests.
 #
echo "Run tests...";
STARTTIME=$(date +%s);
npm test;
TESTS_STATUS=$?;
ENDTIME=$(date +%s);
if [[ "$TESTS_STATUS" -ne 0 ]]
then
    printf "Continue the build? [y/n]: ";
    read c;

    if [[ "$c" != "y" ]]
    then
        echo "The build process was stopped.";
        exit 1;
    fi
fi
echo "Done at $(($ENDTIME - $STARTTIME))s.";

##
 # Remove previous build/ and index.html.
 #
echo "Start removing previous build...";
STARTTIME=$(date +%s);
rm -rf index.html build;
ENDTIME=$(date +%s);
echo "Done at $(($ENDTIME - $STARTTIME))s.";

##
 # Start build process.
 #
echo "Start build process...";
STARTTIME=$(date +%s);
NODE_ENV=production webpack;
ENDTIME=$(date +%s);
echo "Done at $(($ENDTIME - $STARTTIME))s.";

ENDSCRIPTTIME=$(date +%s);
echo "Done at $(($ENDSCRIPTTIME - $STARTSCRIPTTIME))s.";
