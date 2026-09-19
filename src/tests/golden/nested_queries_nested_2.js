
function query(constants0) {
  {
    let ret0;
    {
      let env;
      {
        ;
        env = {
          };;
        {
          let id;
          {
            ;
            id = null;;
            {
              let stratify0;
              {
                ;
                {
                  let tmp0 = distinct(array());
                  {
                    ;
                    iterColl(recDot(constants0, "t1"), (function (tmap$0) {
                                                {
                          let tappe$0;
                          {
                            ;
                            tappe$0 = recConcat({
                                  "tl": (env)
                                }, {
                                  "slc": (array(tmap$0))
                                });;
                            {
                              let stratify0$0;
                              {
                                ;
                                {
                                  let tapp$0;
                                  {
                                    ;
                                    tapp$0 = nth(recDot(tappe$0, "slc"), {
                                          "$nat": (0.0)
                                        });;
                                    if (either(tapp$0)) {
                                      {
                                        let teitherL$0 = getLeft(tapp$0);
                                        stratify0$0 = teitherL$0;
                                      }
                                    } else {
                                      {
                                        let teitherR$0 = getRight(tapp$0);
                                        stratify0$0 = {
                                            "t1.a1": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "t1.b1": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            })
                                          };
                                      }
                                    }
                                  }
                                };
                                {
                                  let stratify1;
                                  {
                                    ;
                                    {
                                      let tapp$0;
                                      {
                                        ;
                                        tapp$0 = nth(recDot(tappe$0, "slc"), {
                                              "$nat": (0.0)
                                            });;
                                        if (either(tapp$0)) {
                                          {
                                            let teitherL$0 = getLeft(tapp$0);
                                            stratify1 = teitherL$0;
                                          }
                                        } else {
                                          {
                                            let teitherR$0 = getRight(tapp$0);
                                            stratify1 = {
                                                "t1.a1": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "t1.b1": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                })
                                              };
                                          }
                                        }
                                      }
                                    };
                                    tmp0 = union(tmp0, array(recConcat({
                                              "_c0.a1": (recDot(stratify0$0, "t1.a1"))
                                            }, recConcat({
                                                "_c0.b1": (recDot(stratify1, "t1.b1"))
                                              }, {
                                              }))));
                                  }
                                }
                              }
                            }
                          }
                        }
                      }));;
                    stratify0 = tmp0;
                  }
                };
                {
                  let stratify0$8;
                  {
                    ;
                    stratify0$8 = groupBy("0", array("_c0.a1"), stratify0);;
                    {
                      let stratify1;
                      {
                        ;
                        {
                          let tmp0 = distinct(array());
                          {
                            ;
                            iterColl(stratify0$8, (function (tmap$0) {
                                                                tmp0 = union(tmp0, array(recDot(tmap$0, "0")));
                              }));;
                            stratify1 = tmp0;
                          }
                        };
                        {
                          let stratify2;
                          {
                            ;
                            {
                              let tmp0 = distinct(array());
                              {
                                ;
                                iterColl(stratify1, (function (tsel$0) {
                                                                        {
                                      let stratify0$7;
                                      {
                                        ;
                                        {
                                          let tappe$0;
                                          {
                                            ;
                                            tappe$0 = recConcat({
                                                  "tl": (env)
                                                }, {
                                                  "slc": (tsel$0)
                                                });;
                                            {
                                              let tapp$0;
                                              {
                                                ;
                                                {
                                                  let stratify0$6;
                                                  {
                                                    ;
                                                    {
                                                      let tmp1 = distinct(array());
                                                      {
                                                        ;
                                                        iterColl(recDot(constants0, "t2"), (function (tmap$0) {
                                                                                                                        {
                                                              let tappe$1;
                                                              {
                                                                ;
                                                                tappe$1 = recConcat({
                                                                      "tl": (tappe$0)
                                                                    }, {
                                                                      "slc": (array(tmap$0))
                                                                    });;
                                                                {
                                                                  let stratify0$0;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tapp$1;
                                                                      {
                                                                        ;
                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                              "$nat": (0.0)
                                                                            });;
                                                                        if (either(tapp$1)) {
                                                                          {
                                                                            let teitherL$0 = getLeft(tapp$1);
                                                                            stratify0$0 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$1);
                                                                            stratify0$0 = {
                                                                                "t2.a2": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "t2.b2": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                })
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    {
                                                                      let stratify1$0;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let tapp$1;
                                                                          {
                                                                            ;
                                                                            tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                  "$nat": (0.0)
                                                                                });;
                                                                            if (either(tapp$1)) {
                                                                              {
                                                                                let teitherL$0 = getLeft(tapp$1);
                                                                                stratify1$0 = teitherL$0;
                                                                              }
                                                                            } else {
                                                                              {
                                                                                let teitherR$0 = getRight(tapp$1);
                                                                                stratify1$0 = {
                                                                                    "t2.a2": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t2.b2": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    })
                                                                                  };
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        tmp1 = union(tmp1, array(recConcat({
                                                                                  "_c1.a2": (recDot(stratify0$0, "t2.a2"))
                                                                                }, recConcat({
                                                                                    "_c1.b2": (recDot(stratify1$0, "t2.b2"))
                                                                                  }, {
                                                                                  }))));
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }));;
                                                        stratify0$6 = tmp1;
                                                      }
                                                    };
                                                    {
                                                      let stratify0$5;
                                                      {
                                                        ;
                                                        stratify0$5 = groupBy("0", array("_c1.a2"), stratify0$6);;
                                                        {
                                                          let stratify1$1;
                                                          {
                                                            ;
                                                            {
                                                              let tmp1 = distinct(array());
                                                              {
                                                                ;
                                                                iterColl(stratify0$5, (function (tmap$0) {
                                                                                                                                        tmp1 = union(tmp1, array(recDot(tmap$0, "0")));
                                                                  }));;
                                                                stratify1$1 = tmp1;
                                                              }
                                                            };
                                                            {
                                                              let stratify2$1;
                                                              {
                                                                ;
                                                                {
                                                                  let tmp1 = distinct(array());
                                                                  {
                                                                    ;
                                                                    iterColl(stratify1$1, (function (tsel$1) {
                                                                                                                                                {
                                                                          let stratify0$4;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tappe$1;
                                                                              {
                                                                                ;
                                                                                tappe$1 = recConcat({
                                                                                      "tl": (tappe$0)
                                                                                    }, {
                                                                                      "slc": (tsel$1)
                                                                                    });;
                                                                                {
                                                                                  let tapp$A;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let tappe$3;
                                                                                      {
                                                                                        ;
                                                                                        {
                                                                                          let stratify0$3;
                                                                                          {
                                                                                            ;
                                                                                            {
                                                                                              let tmp2 = distinct(array());
                                                                                              {
                                                                                                ;
                                                                                                iterColl(recDot(tappe$1, "slc"), (function (tmap$0) {
                                                                                                                                                                                                        {
                                                                                                      let tappe$2;
                                                                                                      {
                                                                                                        ;
                                                                                                        tappe$2 = recConcat({
                                                                                                              "tl": (recDot(tappe$1, "tl"))
                                                                                                            }, {
                                                                                                              "slc": (array(tmap$0))
                                                                                                            });;
                                                                                                        {
                                                                                                          let tapp$9;
                                                                                                          {
                                                                                                            ;
                                                                                                            tapp$9 = {
                                                                                                                "$left": ({
                                                                                                                  "$nat": (1.0)
                                                                                                                })
                                                                                                              };;
                                                                                                            if (either(tapp$9)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tapp$9);
                                                                                                                {
                                                                                                                  let tapp$8;
                                                                                                                  {
                                                                                                                    ;
                                                                                                                    {
                                                                                                                      let tapp$5;
                                                                                                                      {
                                                                                                                        ;
                                                                                                                        tapp$5 = {
                                                                                                                            "$left": ({
                                                                                                                              "$nat": (0.0)
                                                                                                                            })
                                                                                                                          };;
                                                                                                                        if (either(tapp$5)) {
                                                                                                                          {
                                                                                                                            let teitherL$0 = getLeft(tapp$5);
                                                                                                                            {
                                                                                                                              let tapp$4;
                                                                                                                              {
                                                                                                                                ;
                                                                                                                                {
                                                                                                                                  let stratify0$0;
                                                                                                                                  {
                                                                                                                                    ;
                                                                                                                                    {
                                                                                                                                      let tapp$1;
                                                                                                                                      {
                                                                                                                                        ;
                                                                                                                                        tapp$1 = nth(recDot(tappe$2, "slc"), {
                                                                                                                                              "$nat": (0.0)
                                                                                                                                            });;
                                                                                                                                        if (either(tapp$1)) {
                                                                                                                                          {
                                                                                                                                            let teitherL$0 = getLeft(tapp$1);
                                                                                                                                            stratify0$0 = teitherL$0;
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          {
                                                                                                                                            let teitherR$0 = getRight(tapp$1);
                                                                                                                                            stratify0$0 = {
                                                                                                                                                "_c1.a2": ({
                                                                                                                                                  "$right": ({
                                                                                                                                                    "$nat": (0.0)
                                                                                                                                                  })
                                                                                                                                                }), 
                                                                                                                                                "_c1.b2": ({
                                                                                                                                                  "$right": ({
                                                                                                                                                    "$nat": (0.0)
                                                                                                                                                  })
                                                                                                                                                })
                                                                                                                                              };
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    };
                                                                                                                                    tapp$4 = recDot(stratify0$0, "_c1.a2");
                                                                                                                                  }
                                                                                                                                };
                                                                                                                                if (either(tapp$4)) {
                                                                                                                                  {
                                                                                                                                    let teitherL$0 = getLeft(tapp$4);
                                                                                                                                    {
                                                                                                                                      let tapp$3;
                                                                                                                                      {
                                                                                                                                        ;
                                                                                                                                        tapp$3 = {
                                                                                                                                            "$left": ({
                                                                                                                                              "$nat": (0.0)
                                                                                                                                            })
                                                                                                                                          };;
                                                                                                                                        if (either(tapp$3)) {
                                                                                                                                          {
                                                                                                                                            let teitherL$0 = getLeft(tapp$3);
                                                                                                                                            {
                                                                                                                                              let stratify0$1;
                                                                                                                                              {
                                                                                                                                                ;
                                                                                                                                                {
                                                                                                                                                  let tapp$2;
                                                                                                                                                  {
                                                                                                                                                    ;
                                                                                                                                                    {
                                                                                                                                                      let stratify0$0;
                                                                                                                                                      {
                                                                                                                                                        ;
                                                                                                                                                        {
                                                                                                                                                          let tapp$1;
                                                                                                                                                          {
                                                                                                                                                            ;
                                                                                                                                                            tapp$1 = nth(recDot(tappe$2, "slc"), {
                                                                                                                                                                  "$nat": (0.0)
                                                                                                                                                                });;
                                                                                                                                                            if (either(tapp$1)) {
                                                                                                                                                              {
                                                                                                                                                                let teitherL$0 = getLeft(tapp$1);
                                                                                                                                                                stratify0$0 = teitherL$0;
                                                                                                                                                              }
                                                                                                                                                            } else {
                                                                                                                                                              {
                                                                                                                                                                let teitherR$0 = getRight(tapp$1);
                                                                                                                                                                stratify0$0 = {
                                                                                                                                                                    "_c1.a2": ({
                                                                                                                                                                      "$right": ({
                                                                                                                                                                        "$nat": (0.0)
                                                                                                                                                                      })
                                                                                                                                                                    }), 
                                                                                                                                                                    "_c1.b2": ({
                                                                                                                                                                      "$right": ({
                                                                                                                                                                        "$nat": (0.0)
                                                                                                                                                                      })
                                                                                                                                                                    })
                                                                                                                                                                  };
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        };
                                                                                                                                                        tapp$2 = recDot(stratify0$0, "_c1.a2");
                                                                                                                                                      }
                                                                                                                                                    };
                                                                                                                                                    if (either(tapp$2)) {
                                                                                                                                                      {
                                                                                                                                                        let teitherL$0 = getLeft(tapp$2);
                                                                                                                                                        stratify0$1 = teitherL$0;
                                                                                                                                                      }
                                                                                                                                                    } else {
                                                                                                                                                      {
                                                                                                                                                        let teitherR$0 = getRight(tapp$2);
                                                                                                                                                        stratify0$1 = {
                                                                                                                                                            "$right": (teitherR$0)
                                                                                                                                                          };
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                };
                                                                                                                                                tapp$8 = {
                                                                                                                                                    "$left": (natMult(teitherL$0, stratify0$1))
                                                                                                                                                  };
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          {
                                                                                                                                            let teitherR$0 = getRight(tapp$3);
                                                                                                                                            tapp$8 = {
                                                                                                                                                "$right": (teitherR$0)
                                                                                                                                              };
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                } else {
                                                                                                                                  {
                                                                                                                                    let teitherR$0 = getRight(tapp$4);
                                                                                                                                    tapp$8 = {
                                                                                                                                        "$right": (teitherR$0)
                                                                                                                                      };
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        } else {
                                                                                                                          {
                                                                                                                            let teitherR$0 = getRight(tapp$5);
                                                                                                                            tapp$8 = {
                                                                                                                                "$right": (teitherR$0)
                                                                                                                              };
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    };
                                                                                                                    if (either(tapp$8)) {
                                                                                                                      {
                                                                                                                        let teitherL$0 = getLeft(tapp$8);
                                                                                                                        {
                                                                                                                          let tapp$7;
                                                                                                                          {
                                                                                                                            ;
                                                                                                                            tapp$7 = {
                                                                                                                                "$left": ({
                                                                                                                                  "$nat": (1.0)
                                                                                                                                })
                                                                                                                              };;
                                                                                                                            if (either(tapp$7)) {
                                                                                                                              {
                                                                                                                                let teitherL$0 = getLeft(tapp$7);
                                                                                                                                {
                                                                                                                                  let stratify0$2;
                                                                                                                                  {
                                                                                                                                    ;
                                                                                                                                    {
                                                                                                                                      let tapp$6;
                                                                                                                                      {
                                                                                                                                        ;
                                                                                                                                        {
                                                                                                                                          let tapp$5;
                                                                                                                                          {
                                                                                                                                            ;
                                                                                                                                            tapp$5 = {
                                                                                                                                                "$left": ({
                                                                                                                                                  "$nat": (0.0)
                                                                                                                                                })
                                                                                                                                              };;
                                                                                                                                            if (either(tapp$5)) {
                                                                                                                                              {
                                                                                                                                                let teitherL$0 = getLeft(tapp$5);
                                                                                                                                                {
                                                                                                                                                  let tapp$4;
                                                                                                                                                  {
                                                                                                                                                    ;
                                                                                                                                                    {
                                                                                                                                                      let stratify0$0;
                                                                                                                                                      {
                                                                                                                                                        ;
                                                                                                                                                        {
                                                                                                                                                          let tapp$1;
                                                                                                                                                          {
                                                                                                                                                            ;
                                                                                                                                                            tapp$1 = nth(recDot(tappe$2, "slc"), {
                                                                                                                                                                  "$nat": (0.0)
                                                                                                                                                                });;
                                                                                                                                                            if (either(tapp$1)) {
                                                                                                                                                              {
                                                                                                                                                                let teitherL$0 = getLeft(tapp$1);
                                                                                                                                                                stratify0$0 = teitherL$0;
                                                                                                                                                              }
                                                                                                                                                            } else {
                                                                                                                                                              {
                                                                                                                                                                let teitherR$0 = getRight(tapp$1);
                                                                                                                                                                stratify0$0 = {
                                                                                                                                                                    "_c1.a2": ({
                                                                                                                                                                      "$right": ({
                                                                                                                                                                        "$nat": (0.0)
                                                                                                                                                                      })
                                                                                                                                                                    }), 
                                                                                                                                                                    "_c1.b2": ({
                                                                                                                                                                      "$right": ({
                                                                                                                                                                        "$nat": (0.0)
                                                                                                                                                                      })
                                                                                                                                                                    })
                                                                                                                                                                  };
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        };
                                                                                                                                                        tapp$4 = recDot(stratify0$0, "_c1.a2");
                                                                                                                                                      }
                                                                                                                                                    };
                                                                                                                                                    if (either(tapp$4)) {
                                                                                                                                                      {
                                                                                                                                                        let teitherL$0 = getLeft(tapp$4);
                                                                                                                                                        {
                                                                                                                                                          let tapp$3;
                                                                                                                                                          {
                                                                                                                                                            ;
                                                                                                                                                            tapp$3 = {
                                                                                                                                                                "$left": ({
                                                                                                                                                                  "$nat": (0.0)
                                                                                                                                                                })
                                                                                                                                                              };;
                                                                                                                                                            if (either(tapp$3)) {
                                                                                                                                                              {
                                                                                                                                                                let teitherL$0 = getLeft(tapp$3);
                                                                                                                                                                {
                                                                                                                                                                  let stratify0$1;
                                                                                                                                                                  {
                                                                                                                                                                    ;
                                                                                                                                                                    {
                                                                                                                                                                      let tapp$2;
                                                                                                                                                                      {
                                                                                                                                                                        ;
                                                                                                                                                                        {
                                                                                                                                                                          let stratify0$0;
                                                                                                                                                                          {
                                                                                                                                                                            ;
                                                                                                                                                                            {
                                                                                                                                                                              let tapp$1;
                                                                                                                                                                              {
                                                                                                                                                                                ;
                                                                                                                                                                                tapp$1 = nth(recDot(tappe$2, "slc"), {
                                                                                                                                                                                      "$nat": (0.0)
                                                                                                                                                                                    });;
                                                                                                                                                                                if (either(tapp$1)) {
                                                                                                                                                                                  {
                                                                                                                                                                                    let teitherL$0 = getLeft(tapp$1);
                                                                                                                                                                                    stratify0$0 = teitherL$0;
                                                                                                                                                                                  }
                                                                                                                                                                                } else {
                                                                                                                                                                                  {
                                                                                                                                                                                    let teitherR$0 = getRight(tapp$1);
                                                                                                                                                                                    stratify0$0 = {
                                                                                                                                                                                        "_c1.a2": ({
                                                                                                                                                                                          "$right": ({
                                                                                                                                                                                            "$nat": (0.0)
                                                                                                                                                                                          })
                                                                                                                                                                                        }), 
                                                                                                                                                                                        "_c1.b2": ({
                                                                                                                                                                                          "$right": ({
                                                                                                                                                                                            "$nat": (0.0)
                                                                                                                                                                                          })
                                                                                                                                                                                        })
                                                                                                                                                                                      };
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            };
                                                                                                                                                                            tapp$2 = recDot(stratify0$0, "_c1.a2");
                                                                                                                                                                          }
                                                                                                                                                                        };
                                                                                                                                                                        if (either(tapp$2)) {
                                                                                                                                                                          {
                                                                                                                                                                            let teitherL$0 = getLeft(tapp$2);
                                                                                                                                                                            stratify0$1 = teitherL$0;
                                                                                                                                                                          }
                                                                                                                                                                        } else {
                                                                                                                                                                          {
                                                                                                                                                                            let teitherR$0 = getRight(tapp$2);
                                                                                                                                                                            stratify0$1 = {
                                                                                                                                                                                "$right": (teitherR$0)
                                                                                                                                                                              };
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    };
                                                                                                                                                                    tapp$6 = {
                                                                                                                                                                        "$left": (natMult(teitherL$0, stratify0$1))
                                                                                                                                                                      };
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            } else {
                                                                                                                                                              {
                                                                                                                                                                let teitherR$0 = getRight(tapp$3);
                                                                                                                                                                tapp$6 = {
                                                                                                                                                                    "$right": (teitherR$0)
                                                                                                                                                                  };
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    } else {
                                                                                                                                                      {
                                                                                                                                                        let teitherR$0 = getRight(tapp$4);
                                                                                                                                                        tapp$6 = {
                                                                                                                                                            "$right": (teitherR$0)
                                                                                                                                                          };
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            } else {
                                                                                                                                              {
                                                                                                                                                let teitherR$0 = getRight(tapp$5);
                                                                                                                                                tapp$6 = {
                                                                                                                                                    "$right": (teitherR$0)
                                                                                                                                                  };
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        };
                                                                                                                                        if (either(tapp$6)) {
                                                                                                                                          {
                                                                                                                                            let teitherL$0 = getLeft(tapp$6);
                                                                                                                                            stratify0$2 = teitherL$0;
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          {
                                                                                                                                            let teitherR$0 = getRight(tapp$6);
                                                                                                                                            stratify0$2 = {
                                                                                                                                                "$right": (teitherR$0)
                                                                                                                                              };
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    };
                                                                                                                                    tmp2 = union(tmp2, array({
                                                                                                                                            "$left": (natPlus(teitherL$0, stratify0$2))
                                                                                                                                          }));
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              {
                                                                                                                                let teitherR$0 = getRight(tapp$7);
                                                                                                                                tmp2 = union(tmp2, array({
                                                                                                                                        "$right": (teitherR$0)
                                                                                                                                      }));
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      {
                                                                                                                        let teitherR$0 = getRight(tapp$8);
                                                                                                                        tmp2 = union(tmp2, array({
                                                                                                                                "$right": (teitherR$0)
                                                                                                                              }));
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tapp$9);
                                                                                                                tmp2 = union(tmp2, array({
                                                                                                                        "$right": (teitherR$0)
                                                                                                                      }));
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }));;
                                                                                                stratify0$3 = tmp2;
                                                                                              }
                                                                                            };
                                                                                            {
                                                                                              let stratify1$0;
                                                                                              {
                                                                                                ;
                                                                                                {
                                                                                                  let tmp2 = distinct(array());
                                                                                                  {
                                                                                                    ;
                                                                                                    iterColl(stratify0$3, (function (tsel$0) {
                                                                                                                                                                                                                {
                                                                                                          let stratify0$0;
                                                                                                          {
                                                                                                            ;
                                                                                                            if (either(tsel$0)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tsel$0);
                                                                                                                stratify0$0 = true;
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tsel$0);
                                                                                                                stratify0$0 = false;
                                                                                                              }
                                                                                                            };
                                                                                                            if (stratify0$0) {
                                                                                                              tmp2 = union(tmp2, array(array(tsel$0)));
                                                                                                            } else {
                                                                                                              tmp2 = union(tmp2, array(array()));
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }));;
                                                                                                    stratify1$0 = tmp2;
                                                                                                  }
                                                                                                };
                                                                                                {
                                                                                                  let stratify2$0;
                                                                                                  {
                                                                                                    ;
                                                                                                    {
                                                                                                      let tmp2 = distinct(array());
                                                                                                      {
                                                                                                        ;
                                                                                                        iterColl(flatten(stratify1$0), (function (tmap$0) {
                                                                                                                                                                                                                        if (either(tmap$0)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tmap$0);
                                                                                                                tmp2 = union(tmp2, array(teitherL$0));
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tmap$0);
                                                                                                                tmp2 = union(tmp2, array(teitherR$0));
                                                                                                              }
                                                                                                            }
                                                                                                          }));;
                                                                                                        stratify2$0 = tmp2;
                                                                                                      }
                                                                                                    };
                                                                                                    tappe$3 = recConcat({
                                                                                                          "a#": ({
                                                                                                            "$left": (natSum(stratify2$0))
                                                                                                          })
                                                                                                        }, {
                                                                                                          "b#": ({
                                                                                                            "$left": ({
                                                                                                              "$nat": (10.0)
                                                                                                            })
                                                                                                          })
                                                                                                        });
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        };
                                                                                        {
                                                                                          let tapp$5;
                                                                                          {
                                                                                            ;
                                                                                            tapp$5 = recDot(tappe$3, "a#");;
                                                                                            if (either(tapp$5)) {
                                                                                              {
                                                                                                let teitherL$0 = getLeft(tapp$5);
                                                                                                {
                                                                                                  let tapp$4;
                                                                                                  {
                                                                                                    ;
                                                                                                    tapp$4 = {
                                                                                                        "$left": (teitherL$0)
                                                                                                      };;
                                                                                                    {
                                                                                                      let tapp$1;
                                                                                                      {
                                                                                                        ;
                                                                                                        tapp$1 = recDot(tappe$3, "b#");;
                                                                                                        if (either(tapp$1)) {
                                                                                                          {
                                                                                                            let teitherL$0 = getLeft(tapp$1);
                                                                                                            {
                                                                                                              let tapp$3;
                                                                                                              {
                                                                                                                ;
                                                                                                                tapp$3 = {
                                                                                                                    "$left": (teitherL$0)
                                                                                                                  };;
                                                                                                                {
                                                                                                                  let stratify0$0;
                                                                                                                  {
                                                                                                                    ;
                                                                                                                    {
                                                                                                                      let tapp$2;
                                                                                                                      {
                                                                                                                        ;
                                                                                                                        tapp$2 = recDot(tappe$3, "a#");;
                                                                                                                        if (either(tapp$2)) {
                                                                                                                          {
                                                                                                                            let teitherL$0 = getLeft(tapp$2);
                                                                                                                            stratify0$0 = teitherL$0;
                                                                                                                          }
                                                                                                                        } else {
                                                                                                                          {
                                                                                                                            let teitherR$0 = getRight(tapp$2);
                                                                                                                            stratify0$0 = teitherR$0;
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    };
                                                                                                                    {
                                                                                                                      let stratify1$0;
                                                                                                                      {
                                                                                                                        ;
                                                                                                                        {
                                                                                                                          let tapp$2;
                                                                                                                          {
                                                                                                                            ;
                                                                                                                            tapp$2 = recDot(tappe$3, "b#");;
                                                                                                                            if (either(tapp$2)) {
                                                                                                                              {
                                                                                                                                let teitherL$0 = getLeft(tapp$2);
                                                                                                                                stratify1$0 = teitherL$0;
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              {
                                                                                                                                let teitherR$0 = getRight(tapp$2);
                                                                                                                                stratify1$0 = teitherR$0;
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        };
                                                                                                                        tapp$A = {
                                                                                                                            "$left": (equal(stratify0$0, stratify1$0))
                                                                                                                          };
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        } else {
                                                                                                          {
                                                                                                            let teitherR$0 = getRight(tapp$1);
                                                                                                            tapp$A = {
                                                                                                                "$right": (null)
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            } else {
                                                                                              {
                                                                                                let teitherR$0 = getRight(tapp$5);
                                                                                                tapp$A = {
                                                                                                    "$right": (null)
                                                                                                  };
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    };
                                                                                    if (either(tapp$A)) {
                                                                                      {
                                                                                        let teitherL$0 = getLeft(tapp$A);
                                                                                        stratify0$4 = teitherL$0;
                                                                                      }
                                                                                    } else {
                                                                                      {
                                                                                        let teitherR$0 = getRight(tapp$A);
                                                                                        stratify0$4 = false;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            if (stratify0$4) {
                                                                              tmp1 = union(tmp1, array(array(tsel$1)));
                                                                            } else {
                                                                              tmp1 = union(tmp1, array(array()));
                                                                            }
                                                                          }
                                                                        }
                                                                      }));;
                                                                    stratify2$1 = tmp1;
                                                                  }
                                                                };
                                                                {
                                                                  let stratify3;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tmp1 = distinct(array());
                                                                      {
                                                                        ;
                                                                        iterColl(flatten(stratify2$1), (function (tmap$0) {
                                                                                                                                                        {
                                                                              let tappe$1;
                                                                              {
                                                                                ;
                                                                                tappe$1 = recConcat({
                                                                                      "tl": (tappe$0)
                                                                                    }, {
                                                                                      "slc": (tmap$0)
                                                                                    });;
                                                                                {
                                                                                  let stratify0$0;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let tapp$1;
                                                                                      {
                                                                                        ;
                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                              "$nat": (0.0)
                                                                                            });;
                                                                                        if (either(tapp$1)) {
                                                                                          {
                                                                                            let teitherL$0 = getLeft(tapp$1);
                                                                                            stratify0$0 = teitherL$0;
                                                                                          }
                                                                                        } else {
                                                                                          {
                                                                                            let teitherR$0 = getRight(tapp$1);
                                                                                            stratify0$0 = {
                                                                                                "_c1.a2": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                }), 
                                                                                                "_c1.b2": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                })
                                                                                              };
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    };
                                                                                    tmp1 = union(tmp1, array(recConcat({
                                                                                              "_c1_a2": (recDot(stratify0$0, "_c1.a2"))
                                                                                            }, {
                                                                                            })));
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }));;
                                                                        stratify3 = tmp1;
                                                                      }
                                                                    };
                                                                    tapp$0 = {
                                                                        "$left": ((!natLe(count(stratify3), {
                                                                              "$nat": (0.0)
                                                                            })))
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                };
                                                if (either(tapp$0)) {
                                                  {
                                                    let teitherL$0 = getLeft(tapp$0);
                                                    stratify0$7 = teitherL$0;
                                                  }
                                                } else {
                                                  {
                                                    let teitherR$0 = getRight(tapp$0);
                                                    stratify0$7 = false;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        };
                                        if (stratify0$7) {
                                          tmp0 = union(tmp0, array(array(tsel$0)));
                                        } else {
                                          tmp0 = union(tmp0, array(array()));
                                        }
                                      }
                                    }
                                  }));;
                                stratify2 = tmp0;
                              }
                            };
                            {
                              let tmp0 = distinct(array());
                              {
                                ;
                                iterColl(flatten(stratify2), (function (tmap$0) {
                                                                        {
                                      let tappe$0;
                                      {
                                        ;
                                        tappe$0 = recConcat({
                                              "tl": (env)
                                            }, {
                                              "slc": (tmap$0)
                                            });;
                                        {
                                          let stratify0$0;
                                          {
                                            ;
                                            {
                                              let tapp$0;
                                              {
                                                ;
                                                tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                      "$nat": (0.0)
                                                    });;
                                                if (either(tapp$0)) {
                                                  {
                                                    let teitherL$0 = getLeft(tapp$0);
                                                    stratify0$0 = teitherL$0;
                                                  }
                                                } else {
                                                  {
                                                    let teitherR$0 = getRight(tapp$0);
                                                    stratify0$0 = {
                                                        "_c0.a1": ({
                                                          "$right": ({
                                                            "$nat": (0.0)
                                                          })
                                                        }), 
                                                        "_c0.b1": ({
                                                          "$right": ({
                                                            "$nat": (0.0)
                                                          })
                                                        })
                                                      };
                                                  }
                                                }
                                              }
                                            };
                                            tmp0 = union(tmp0, array(recConcat({
                                                      "_c0_a1": (recDot(stratify0$0, "_c0.a1"))
                                                    }, {
                                                    })));
                                          }
                                        }
                                      }
                                    }
                                  }));;
                                ret0 = tmp0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    return ret0;
  }
}module.exports = { query };
