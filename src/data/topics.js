export const roadmapSteps = [
  {
    id: 1,
    phase: 'Fundamenty',
    color: '#3b82f6',
    icon: '🧱',
    topics: ['Python / SQL', 'Linux & CLI', 'Git & wersjonowanie', 'Algorytmy & struktury danych'],
  },
  {
    id: 2,
    phase: 'Bazy Danych',
    color: '#8b5cf6',
    icon: '🗄️',
    topics: ['Relacyjne (PostgreSQL)', 'Kolumnowe (BigQuery, Redshift)', 'NoSQL (MongoDB, Cassandra)', 'Data Warehousing'],
  },
  {
    id: 3,
    phase: 'Przetwarzanie',
    color: '#06b6d4',
    icon: '⚙️',
    topics: ['Apache Spark', 'Apache Kafka', 'Batch vs Streaming', 'dbt (transformacje)'],
  },
  {
    id: 4,
    phase: 'Orkiestracja',
    color: '#10b981',
    icon: '🔄',
    topics: ['Apache Airflow', 'Prefect / Dagster', 'ETL / ELT patterns', 'Pipeline monitoring'],
  },
  {
    id: 5,
    phase: 'Cloud & DevOps',
    color: '#f59e0b',
    icon: '☁️',
    topics: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD dla danych'],
  },
  {
    id: 6,
    phase: 'Jakość Danych',
    color: '#ec4899',
    icon: '✅',
    topics: ['Data contracts', 'Great Expectations', 'Data lineage', 'Observability'],
  },
];

export const codeExamples = [
  {
    id: 'spark',
    title: 'Apache Spark — agregacja danych',
    language: 'python',
    description: 'Wczytaj CSV, przefiltruj i oblicz agregaty za pomocą PySpark DataFrame API.',
    code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg, count

spark = SparkSession.builder \\
    .appName("SalesAnalysis") \\
    .getOrCreate()

df = spark.read.csv("sales.csv", header=True, inferSchema=True)

result = (
    df.filter(col("amount") > 0)
      .groupBy("region")
      .agg(
          count("*").alias("total_orders"),
          avg("amount").alias("avg_amount")
      )
      .orderBy("avg_amount", ascending=False)
)

result.show()`,
  },
  {
    id: 'sql',
    title: 'SQL — Window Functions',
    language: 'sql',
    description: 'Oblicz kumulatywną sumę i ranking sprzedaży w każdym miesiącu.',
    code: `WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        product_id,
        SUM(revenue)                    AS revenue
    FROM orders
    WHERE order_date >= '2024-01-01'
    GROUP BY 1, 2
)
SELECT
    month,
    product_id,
    revenue,
    SUM(revenue) OVER (
        PARTITION BY product_id
        ORDER BY month
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS cumulative_revenue,
    RANK() OVER (
        PARTITION BY month
        ORDER BY revenue DESC
    ) AS monthly_rank
FROM monthly_sales
ORDER BY month, monthly_rank;`,
  },
  {
    id: 'airflow',
    title: 'Airflow — DAG definicja',
    language: 'python',
    description: 'Prosty pipeline ETL: wyciągnij dane z API, transformuj i załaduj do DWH.',
    code: `from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta

default_args = {
    "owner": "data-team",
    "retries": 2,
    "retry_delay": timedelta(minutes=5),
}

with DAG(
    dag_id="etl_pipeline",
    default_args=default_args,
    schedule="@daily",
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=["etl", "production"],
) as dag:

    extract = PythonOperator(
        task_id="extract_from_api",
        python_callable=extract_data,
    )

    transform = PythonOperator(
        task_id="transform_data",
        python_callable=transform_data,
    )

    load = PythonOperator(
        task_id="load_to_warehouse",
        python_callable=load_data,
    )

    extract >> transform >> load`,
  },
  {
    id: 'kafka',
    title: 'Kafka — Producer w Pythonie',
    language: 'python',
    description: 'Wysyłaj zdarzenia do tematu Kafka z serializacją JSON.',
    code: `from kafka import KafkaProducer
import json
from datetime import datetime

producer = KafkaProducer(
    bootstrap_servers=["localhost:9092"],
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
    acks="all",           # czekaj na wszystkie repliki
    retries=3,
)

def send_event(user_id: str, action: str, payload: dict):
    event = {
        "user_id": user_id,
        "action": action,
        "payload": payload,
        "timestamp": datetime.utcnow().isoformat(),
    }
    future = producer.send("user-events", value=event)
    record_metadata = future.get(timeout=10)
    print(f"Sent to {record_metadata.topic}:{record_metadata.partition}")

send_event("u123", "purchase", {"product_id": "p42", "amount": 99.99})
producer.flush()`,
  },
];

export const concepts = [
  {
    title: 'Data Lake vs Data Warehouse',
    color: '#3b82f6',
    icon: '🏊',
    points: [
      'Data Lake: surowe dane w dowolnym formacie (S3, GCS)',
      'Data Warehouse: ustrukturyzowane, zoptymalizowane pod zapytania',
      'Data Lakehouse łączy oba podejścia (Delta Lake, Iceberg)',
      'Wybór zależy od przypadku użycia i dojrzałości danych',
    ],
  },
  {
    title: 'Batch vs Streaming',
    color: '#8b5cf6',
    icon: '⚡',
    points: [
      'Batch: przetwarza dane w blokach (np. co godzinę)',
      'Streaming: przetwarza zdarzenia w czasie rzeczywistym',
      'Micro-batch: kompromis (Spark Structured Streaming)',
      'Latencja vs throughput — kluczowy trade-off',
    ],
  },
  {
    title: 'ELT vs ETL',
    color: '#06b6d4',
    icon: '🔁',
    points: [
      'ETL: transformuj PRZED ładowaniem (tradycyjne)',
      'ELT: ładuj surowe, transformuj W DWH (nowoczesne)',
      'ELT popularniejsze dzięki tanim zasobom obliczeniowym',
      'dbt to standard dla warstwy transformacji w ELT',
    ],
  },
  {
    title: 'Partycjonowanie & Indeksy',
    color: '#10b981',
    icon: '📂',
    points: [
      'Partycjonowanie dzieli dane na podzbiory (np. po dacie)',
      'Pruning: silnik pomija niepotrzebne partycje',
      'Clustering/sortowanie przyspiesza filtry i joiny',
      'Kluczowe dla wydajności na petabajtowych zbiorach',
    ],
  },
];

export const tools = [
  { name: 'Apache Spark', category: 'Processing', color: '#f59e0b', emoji: '⚡' },
  { name: 'Apache Kafka', category: 'Streaming', color: '#ec4899', emoji: '📨' },
  { name: 'Apache Airflow', category: 'Orchestration', color: '#06b6d4', emoji: '🌊' },
  { name: 'dbt', category: 'Transform', color: '#f97316', emoji: '🔧' },
  { name: 'BigQuery', category: 'Warehouse', color: '#3b82f6', emoji: '🏛️' },
  { name: 'Snowflake', category: 'Warehouse', color: '#60a5fa', emoji: '❄️' },
  { name: 'Delta Lake', category: 'Storage', color: '#8b5cf6', emoji: '🔷' },
  { name: 'Kubernetes', category: 'Infrastructure', color: '#10b981', emoji: '⚙️' },
  { name: 'Terraform', category: 'IaC', color: '#a78bfa', emoji: '🏗️' },
  { name: 'Great Expectations', category: 'Quality', color: '#34d399', emoji: '✅' },
  { name: 'Prefect', category: 'Orchestration', color: '#818cf8', emoji: '🔄' },
  { name: 'Trino', category: 'Query Engine', color: '#fb923c', emoji: '🔍' },
];
