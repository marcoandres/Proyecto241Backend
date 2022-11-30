CREATE TABLE atencion (
    id_atencion              NUMBER NOT NULL,
    observacion              VARCHAR2(300),
    diagnostico              VARCHAR2(300),
    status                   VARCHAR2(200),
    receta                   VARCHAR2(300),
    fecha_atencion           DATE,
    entrenador_id_entrenador NUMBER NOT NULL,
    pokemon_id_pokemon       NUMBER NOT NULL,
    enfermera_id_enfermera   NUMBER NOT NULL
);

ALTER TABLE atencion ADD CONSTRAINT atencion_pk PRIMARY KEY ( id_atencion );

CREATE TABLE enfermera (
    id_enfermera  NUMBER NOT NULL,
    nombre        VARCHAR2(100),
    foto          BLOB,
    last_update   DATE,
    filename      VARCHAR2(200),
    file_mimetype VARCHAR2(200),
    apodo         VARCHAR2(300)
);

ALTER TABLE enfermera ADD CONSTRAINT enfermera_pk PRIMARY KEY ( id_enfermera );

CREATE TABLE entrenador (
    id_entrenador NUMBER NOT NULL,
    nombre        VARCHAR2(100),
    telefono      VARCHAR2(100),
    categoria     VARCHAR2(200),
    filename      VARCHAR2(200),
    file_mimetype VARCHAR2(100),
    file_charset  VARCHAR2(100),
    foto          BLOB,
    last_update   DATE
);

ALTER TABLE entrenador ADD CONSTRAINT entrenador_pk PRIMARY KEY ( id_entrenador );

CREATE TABLE pokemon (
    id_pokemon       NUMBER NOT NULL,
    nombre           VARCHAR2(200),
    descripcion      VARCHAR2(500),
    blob_imagen      BLOB,
    filename         VARCHAR2(100),
    file_mimetype    VARCHAR2(100),
    last_update      DATE,
    file_charset     VARCHAR2(100),
    apodo            VARCHAR2(300),
    fecha_nacimiento DATE,
    vacunas          VARCHAR2(100),
    peso             VARCHAR2(100),
    sexo             VARCHAR2(100),
    tipo_id_tipo     NUMBER NOT NULL
);

ALTER TABLE pokemon ADD CONSTRAINT pokemon_pk PRIMARY KEY ( id_pokemon );

CREATE TABLE tipo (
    id_tipo     NUMBER NOT NULL,
    nombre_tipo VARCHAR2(200),
    descripcion VARCHAR2(400)
);

ALTER TABLE tipo ADD CONSTRAINT tipo_pk PRIMARY KEY ( id_tipo );

ALTER TABLE atencion
    ADD CONSTRAINT atencion_enfermera_fk FOREIGN KEY ( enfermera_id_enfermera )
        REFERENCES enfermera ( id_enfermera );

ALTER TABLE atencion
    ADD CONSTRAINT atencion_entrenador_fk FOREIGN KEY ( entrenador_id_entrenador )
        REFERENCES entrenador ( id_entrenador );

ALTER TABLE atencion
    ADD CONSTRAINT atencion_pokemon_fk FOREIGN KEY ( pokemon_id_pokemon )
        REFERENCES pokemon ( id_pokemon );

ALTER TABLE pokemon
    ADD CONSTRAINT pokemon_tipo_fk FOREIGN KEY ( tipo_id_tipo )
        REFERENCES tipo ( id_tipo );
