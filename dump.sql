--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tarefas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tarefas (
    id integer NOT NULL,
    name text NOT NULL,
    "userId" integer NOT NULL,
    data date NOT NULL,
    descricao character varying(255) NOT NULL,
    feito text NOT NULL
);


--
-- Name: tarefas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tarefas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tarefas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tarefas_id_seq OWNED BY public.tarefas.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: tarefas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas ALTER COLUMN id SET DEFAULT nextval('public.tarefas_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: tarefas; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tarefas VALUES (4, 'Lavar Louça pa karai', 1, '2022-11-11', 'Lavar a louça do almoço e da Janta', 'true');
INSERT INTO public.tarefas VALUES (5, 'Lavar Louça pa karai', 1, '2022-11-11', 'Lavar a louça do almoço e da Janta', 'false');
INSERT INTO public.tarefas VALUES (6, 'Lavar Louça pa karai', 1, '2022-11-11', 'Lavar a louça do almoço e da Janta', '1');
INSERT INTO public.tarefas VALUES (7, 'Lavar Louça pa karai', 1, '2022-11-11', 'Lavar a louça do almoço e da Janta', 'texto');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Bruno');
INSERT INTO public.users VALUES (3, 'Bruno02');
INSERT INTO public.users VALUES (7, 'Bruno03');
INSERT INTO public.users VALUES (8, 'Bruno 4');
INSERT INTO public.users VALUES (9, 'Bruno 007');
INSERT INTO public.users VALUES (14, 'Bruno 008');
INSERT INTO public.users VALUES (15, 'Bruno 009');
INSERT INTO public.users VALUES (16, 'Bruno 010');
INSERT INTO public.users VALUES (18, 'Bruno 011');
INSERT INTO public.users VALUES (19, 'Bruno 012');


--
-- Name: tarefas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tarefas_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 19, true);


--
-- Name: tarefas tarefas_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_pk PRIMARY KEY (id);


--
-- Name: users users_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: tarefas tarefas_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

