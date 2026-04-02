Next task.

- Fix: We've tried to fix issues that collections are filtered out when camera gets closer to the map. However the issues still exist. You should use playwright cli to check how filtering works in now and fix the issue. You can zoom in and out and check how many collections are visible. You'll see that even when we are away enought from the map, some collections are filtered out.

- New task: STRC spec specifies the use of geoparquet as mirror of items since a number of items can be very large and results in slow response times. If needed you can see https://github.com/radiantearth/stac-geoparquet-spec/blob/main/stac-geoparquet-spec.md . The parquet is mirror and represented as below. It'll have `collection-mirror` role. If this parquet exist as assets of collection, the map shouldn't load item json files and instead load the parquet file. There is a implmenetation to load parquet file on current code base but I think it's not use parquet as the primary source of items.
```
"assets": {
    "items-geoparquet": {
      "href": "./items.parquet",
      "type": "application/vnd.apache.parquet",
      "roles": [
        "collection-mirror"
      ]
    }
    ```