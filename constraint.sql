create sequence atencion_sec
minvalue 4
start with 4 
increment by 1; 

create trigger atencion_TRI
BEFORE INSERT ON atencion
FOR EACH ROW 
BEGIN 
SELECT atencion_sec.nextval INTO :NEW.ID_atencion FROM DUAL;
END;


create sequence enfermera_sec
minvalue 4
start with 4 
increment by 1; 

create trigger enfermera_TRI
BEFORE INSERT ON enfermera
FOR EACH ROW 
BEGIN 
SELECT enfermera_sec.nextval INTO :NEW.ID_enfermera FROM DUAL;
END;

create sequence enfermera_sec
minvalue 4
start with 4 
increment by 1; 

create trigger entrenador_TRI
BEFORE INSERT ON entrenador
FOR EACH ROW 
BEGIN 
SELECT entrenador_sec.nextval INTO :NEW.ID_entrenador FROM DUAL;
END;


create sequence pokemon_sec
minvalue 4
start with 4 
increment by 1; 

create trigger pokemon_TRI
BEFORE INSERT ON pokemon
FOR EACH ROW 
BEGIN 
SELECT pokemon_sec.nextval INTO :NEW.ID_pokemon FROM DUAL;
END;



create sequence tipo_sec
minvalue 4
start with 4 
increment by 1; 

create trigger tipo_TRI
BEFORE INSERT ON tipo
FOR EACH ROW 
BEGIN 
SELECT tipo_sec.nextval INTO :NEW.ID_tipo FROM DUAL;
END;
