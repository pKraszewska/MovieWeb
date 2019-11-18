drop table if exists movies;

create table movies
(
    index                integer not null
        constraint movies_pk
            primary key,
    budget               integer,
    genres               varchar,
    homepage             varchar(100),
    id                   integer,
    keywords             varchar,
    original_language    varchar,
    original_title       varchar,
    overview             varchar,
    popularity           double precision,
    production_companies varchar,
    production_countries varchar,
    release_date         date,
    revenue              bigint,
    runtime              integer,
    spoken_languages     varchar,
    status               varchar,
    tagline              varchar(255),
    title                varchar(150),
    vote_average         double precision,
    vote_count           integer,
    "cast"               varchar,
    crew                 varchar,
    direction            varchar
);
