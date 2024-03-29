---
sidebar_position: 2
---
# Intro
With this type of integration the Medic user will access Prescrypto through a "Deeplink", an URL filled with special parameters that will log automatically the user on the platform and can pre-fill certain fields as the patient data or diagnosis.

# Deeplink

This method consists of generating a link with params in order to send a medic from external services to the authenticated Prescrypto App with the prescription form auto-filled

The params specifications are below

| Param | Description |  i.e. |
| ----------- | -----------|-----------|
| token (required)     | Belongs to the medic who will be authenticated  |$token={{TOKEN}}|
| v2_redirect (required)   | This param will bring your medic to the version 2 of Prescrypto, the newest version at the moment, if you avoid this param the medic will be redirected to the version 1 who it will be deprecated soon.        |$v2_redirect=true|
|diagnosis|This is the text prescribed by the medic, if exists will be autofilled into the prescription form|$dianosis=A pill once per week|
|extras|	It would be required if the integration sends patient info to autocomplete our prescription form. this field is compound by four params as following: patient_email,  patient_dob, patient_name, external_patient_file| &external_patient_file=0011R &patient_email=some@mail.com &patient_name=Miguel    &patient_dob=71|
| hospital | This parameter will temporary set the hospital ID. The Medic has to have a hospital_membership to the hospital. Once the user leaves the page or closes the session, the hospital_id will revert to the previous one |$hospital=71|
|additional_data|	This field is compound by any param your integrations would need, so you can allocate some extra data here and they will be saved in our Prescription Model|Some examples: $external_folio=1234 $external_medic_id=1234 $another_extra_field=Just like this|

There is an example below with deeplink for autologin and autofill prescription:

```shell
Base: 
https://www.prescrypto.com/new/api_token/?

Params:
v2_redirect=true
&token=< TOKEN>
&external_patient_file=< EXTERNAL-ID>
&patient_email=< EMAIL>
&patient_name=< NAME>
&patient_dob=< AGE(INT)>
&diagnosis=< DIAGNOSIS>
&hospital=< Hospital_ID(INT)>
```
**IMPORTANT NOTE: All the param values have to be URI ENCODED, otherwise, the link could not work as expected**

[EOF]