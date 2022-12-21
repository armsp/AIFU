# DB utilities for getting records from tables
# import mariadb
from mysql import connector
import sys

def connect_cursor():
    try:
        conn = connector.connect(
            user="aifume@aifudbtest",
            password="Aifu@maria",
            host="aifudbtest.mariadb.database.azure.com",
            # port=3306,
            database="aifuv1",
            ssl_ca='./BaltimoreCyberTrustRoot.crt.pem'
        )
    except connector.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        # sys.exit(1)
    # Get Cursor
    # cur = conn.cursor()
    return conn

# get records from given table
def get_records_from_table(table_name):
    conn = connect_cursor()
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM {table_name};")
    records = []
    # Print Result-set
    for (id, headline, org, url) in cur:
        records.append({"Headline": headline, "Media org": org, "URL": url})
        print(f"Headline: {headline}, Media org: {org}, URL: {url}")
    conn.close()
    return {"records": records}
# object models






