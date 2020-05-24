## Bitmex Daily Transaction Downloader and Processor

This is a tool to automate downloading and processing the transactions for the previous day.
Configurable for all pairs (default: XBT/USD)
To run:
  - clone repo
  - run npm install
  - cd src
  - node downloadCsv.js (downloads the .csv.gz file and extracts it to the downloads folder)
  - node parseCsv.js (goes through all the transactions and saves the result in the processedData folder)
