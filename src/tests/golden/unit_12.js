
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
                    iterColl(recDot(constants0, "table1"), (function (tmap$0) {
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
                                            "table1.a": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "table1.b": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "table1.c": ({
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
                                                "table1.a": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "table1.b": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "table1.c": ({
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
                                      let stratify2;
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
                                                stratify2 = teitherL$0;
                                              }
                                            } else {
                                              {
                                                let teitherR$0 = getRight(tapp$0);
                                                stratify2 = {
                                                    "table1.a": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    }), 
                                                    "table1.b": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    }), 
                                                    "table1.c": ({
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
                                                  "t1.a": (recDot(stratify0$0, "table1.a"))
                                                }, recConcat({
                                                    "t1.b": (recDot(stratify1, "table1.b"))
                                                  }, recConcat({
                                                      "t1.c": (recDot(stratify2, "table1.c"))
                                                    }, {
                                                    })))));
                                      }
                                    }
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
                  let stratify1;
                  {
                    ;
                    {
                      let tmp0 = distinct(array());
                      {
                        ;
                        iterColl(stratify0, (function (tsel$0) {
                                                        {
                              let stratify0$2;
                              {
                                ;
                                {
                                  let tappe$0;
                                  {
                                    ;
                                    tappe$0 = recConcat({
                                          "tl": (env)
                                        }, {
                                          "slc": (array(tsel$0))
                                        });;
                                    {
                                      let tapp$0;
                                      {
                                        ;
                                        {
                                          let tapp$9;
                                          {
                                            ;
                                            {
                                              let tappe$1;
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
                                                        tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                "t1.a": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t1.b": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t1.c": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                })
                                                              };
                                                          }
                                                        }
                                                      }
                                                    };
                                                    tappe$1 = recConcat({
                                                          "a#": (recDot(stratify0$0, "t1.a"))
                                                        }, {
                                                          "b#": ({
                                                            "$left": ({
                                                              "$nat": (4.0)
                                                            })
                                                          })
                                                        });
                                                  }
                                                };
                                                {
                                                  let tapp$5;
                                                  {
                                                    ;
                                                    tapp$5 = recDot(tappe$1, "a#");;
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
                                                                tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                    tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                tapp$9 = {
                                                                                    "$left": (natLt(stratify0$0, stratify1$0))
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
                                                                    tapp$9 = {
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
                                                        tapp$9 = {
                                                            "$right": (null)
                                                          };
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            };
                                            if (either(tapp$9)) {
                                              {
                                                let teitherL$0 = getLeft(tapp$9);
                                                {
                                                  let tapp$8;
                                                  {
                                                    ;
                                                    {
                                                      let tappe$1;
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
                                                                tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                        "t1.a": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t1.b": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t1.c": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        })
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            tappe$1 = recConcat({
                                                                  "a#": ({
                                                                    "$left": ({
                                                                      "$nat": (7.0)
                                                                    })
                                                                  })
                                                                }, {
                                                                  "b#": (recDot(stratify0$0, "t1.a"))
                                                                });
                                                          }
                                                        };
                                                        {
                                                          let tapp$5;
                                                          {
                                                            ;
                                                            tapp$5 = recDot(tappe$1, "a#");;
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
                                                                        tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                        tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                            tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                        tapp$8 = {
                                                                                            "$left": (natLe(stratify0$0, stratify1$0))
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
                                                                            tapp$8 = {
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
                                                                tapp$8 = {
                                                                    "$right": (null)
                                                                  };
                                                              }
                                                            }
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
                                                            {
                                                              let tappe$1;
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
                                                                        tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                                "t1.a": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "t1.b": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "t1.c": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                })
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    tappe$1 = recConcat({
                                                                          "a#": (recDot(stratify0$0, "t1.a"))
                                                                        }, {
                                                                          "b#": ({
                                                                            "$left": ({
                                                                              "$nat": (4.0)
                                                                            })
                                                                          })
                                                                        });
                                                                  }
                                                                };
                                                                {
                                                                  let tapp$5;
                                                                  {
                                                                    ;
                                                                    tapp$5 = recDot(tappe$1, "a#");;
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
                                                                                tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                                tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                                    tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                                tapp$7 = {
                                                                                                    "$left": (natLt(stratify0$0, stratify1$0))
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
                                                                                    tapp$7 = {
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
                                                                        tapp$7 = {
                                                                            "$right": (null)
                                                                          };
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            if (either(tapp$7)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$7);
                                                                {
                                                                  let stratify0$1;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tapp$6;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let tappe$1;
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
                                                                                    tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                                            "t1.a": ({
                                                                                              "$right": ({
                                                                                                "$nat": (0.0)
                                                                                              })
                                                                                            }), 
                                                                                            "t1.b": ({
                                                                                              "$right": ({
                                                                                                "$nat": (0.0)
                                                                                              })
                                                                                            }), 
                                                                                            "t1.c": ({
                                                                                              "$right": ({
                                                                                                "$nat": (0.0)
                                                                                              })
                                                                                            })
                                                                                          };
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                };
                                                                                tappe$1 = recConcat({
                                                                                      "a#": ({
                                                                                        "$left": ({
                                                                                          "$nat": (7.0)
                                                                                        })
                                                                                      })
                                                                                    }, {
                                                                                      "b#": (recDot(stratify0$0, "t1.a"))
                                                                                    });
                                                                              }
                                                                            };
                                                                            {
                                                                              let tapp$5;
                                                                              {
                                                                                ;
                                                                                tapp$5 = recDot(tappe$1, "a#");;
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
                                                                                            tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                                            tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                                                tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                                            tapp$6 = {
                                                                                                                "$left": (natLe(stratify0$0, stratify1$0))
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
                                                                                                tapp$6 = {
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
                                                                                    tapp$6 = {
                                                                                        "$right": (null)
                                                                                      };
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        if (either(tapp$6)) {
                                                                          {
                                                                            let teitherL$0 = getLeft(tapp$6);
                                                                            stratify0$1 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$6);
                                                                            stratify0$1 = {
                                                                                "$right": (teitherR$0)
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    tapp$0 = {
                                                                        "$left": ((teitherL$0 || stratify0$1))
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$7);
                                                                tapp$0 = {
                                                                    "$right": (teitherR$0)
                                                                  };
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    } else {
                                                      {
                                                        let teitherR$0 = getRight(tapp$8);
                                                        {
                                                          let tapp$6;
                                                          {
                                                            ;
                                                            {
                                                              let stratify0$1;
                                                              {
                                                                ;
                                                                {
                                                                  let tappe$1;
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
                                                                            tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                                    "t1.a": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t1.b": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t1.c": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    })
                                                                                  };
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        tappe$1 = recConcat({
                                                                              "a#": (recDot(stratify0$0, "t1.a"))
                                                                            }, {
                                                                              "b#": ({
                                                                                "$left": ({
                                                                                  "$nat": (4.0)
                                                                                })
                                                                              })
                                                                            });
                                                                      }
                                                                    };
                                                                    {
                                                                      let tapp$5;
                                                                      {
                                                                        ;
                                                                        tapp$5 = recDot(tappe$1, "a#");;
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
                                                                                    tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                                    tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                                        tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                                    stratify0$1 = {
                                                                                                        "$left": (natLt(stratify0$0, stratify1$0))
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
                                                                                        stratify0$1 = {
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
                                                                            stratify0$1 = {
                                                                                "$right": (null)
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                                {
                                                                  let stratify1$0;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tmp1 = distinct(array());
                                                                      {
                                                                        ;
                                                                        iterColl(array(stratify0$1), (function (tsel$0) {
                                                                                                                                                        {
                                                                              let stratify0$0;
                                                                              {
                                                                                ;
                                                                                if (either(tsel$0)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tsel$0);
                                                                                    stratify0$0 = teitherL$0;
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tsel$0);
                                                                                    stratify0$0 = false;
                                                                                  }
                                                                                };
                                                                                if (stratify0$0) {
                                                                                  tmp1 = union(tmp1, array(array(tsel$0)));
                                                                                } else {
                                                                                  tmp1 = union(tmp1, array(array()));
                                                                                }
                                                                              }
                                                                            }
                                                                          }));;
                                                                        stratify1$0 = tmp1;
                                                                      }
                                                                    };
                                                                    tapp$6 = nth(flatten(stratify1$0), {
                                                                          "$nat": (0.0)
                                                                        });
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            if (either(tapp$6)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$6);
                                                                tapp$0 = teitherL$0;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$6);
                                                                tapp$0 = {
                                                                    "$right": (null)
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
                                            } else {
                                              {
                                                let teitherR$0 = getRight(tapp$9);
                                                {
                                                  let tapp$7;
                                                  {
                                                    ;
                                                    {
                                                      let tappe$1;
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
                                                                tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                        "t1.a": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t1.b": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t1.c": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        })
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            tappe$1 = recConcat({
                                                                  "a#": ({
                                                                    "$left": ({
                                                                      "$nat": (7.0)
                                                                    })
                                                                  })
                                                                }, {
                                                                  "b#": (recDot(stratify0$0, "t1.a"))
                                                                });
                                                          }
                                                        };
                                                        {
                                                          let tapp$5;
                                                          {
                                                            ;
                                                            tapp$5 = recDot(tappe$1, "a#");;
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
                                                                        tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                        tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                            tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                        tapp$7 = {
                                                                                            "$left": (natLe(stratify0$0, stratify1$0))
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
                                                                            tapp$7 = {
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
                                                                tapp$7 = {
                                                                    "$right": (null)
                                                                  };
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    };
                                                    if (either(tapp$7)) {
                                                      {
                                                        let teitherL$0 = getLeft(tapp$7);
                                                        {
                                                          let tapp$6;
                                                          {
                                                            ;
                                                            {
                                                              let stratify0$1;
                                                              {
                                                                ;
                                                                {
                                                                  let tappe$1;
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
                                                                            tapp$1 = nth(recDot(tappe$0, "slc"), {
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
                                                                                    "t1.a": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t1.b": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t1.c": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    })
                                                                                  };
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        tappe$1 = recConcat({
                                                                              "a#": ({
                                                                                "$left": ({
                                                                                  "$nat": (7.0)
                                                                                })
                                                                              })
                                                                            }, {
                                                                              "b#": (recDot(stratify0$0, "t1.a"))
                                                                            });
                                                                      }
                                                                    };
                                                                    {
                                                                      let tapp$5;
                                                                      {
                                                                        ;
                                                                        tapp$5 = recDot(tappe$1, "a#");;
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
                                                                                    tapp$1 = recDot(tappe$1, "b#");;
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
                                                                                                    tapp$2 = recDot(tappe$1, "a#");;
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
                                                                                                        tapp$2 = recDot(tappe$1, "b#");;
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
                                                                                                    stratify0$1 = {
                                                                                                        "$left": (natLe(stratify0$0, stratify1$0))
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
                                                                                        stratify0$1 = {
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
                                                                            stratify0$1 = {
                                                                                "$right": (null)
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                                {
                                                                  let stratify1$0;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tmp1 = distinct(array());
                                                                      {
                                                                        ;
                                                                        iterColl(array(stratify0$1), (function (tsel$0) {
                                                                                                                                                        {
                                                                              let stratify0$0;
                                                                              {
                                                                                ;
                                                                                if (either(tsel$0)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tsel$0);
                                                                                    stratify0$0 = teitherL$0;
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tsel$0);
                                                                                    stratify0$0 = false;
                                                                                  }
                                                                                };
                                                                                if (stratify0$0) {
                                                                                  tmp1 = union(tmp1, array(array(tsel$0)));
                                                                                } else {
                                                                                  tmp1 = union(tmp1, array(array()));
                                                                                }
                                                                              }
                                                                            }
                                                                          }));;
                                                                        stratify1$0 = tmp1;
                                                                      }
                                                                    };
                                                                    tapp$6 = nth(flatten(stratify1$0), {
                                                                          "$nat": (0.0)
                                                                        });
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            if (either(tapp$6)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$6);
                                                                tapp$0 = teitherL$0;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$6);
                                                                tapp$0 = {
                                                                    "$right": (null)
                                                                  };
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    } else {
                                                      {
                                                        let teitherR$0 = getRight(tapp$7);
                                                        tapp$0 = {
                                                            "$right": (null)
                                                          };
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
                                            stratify0$2 = teitherL$0;
                                          }
                                        } else {
                                          {
                                            let teitherR$0 = getRight(tapp$0);
                                            stratify0$2 = false;
                                          }
                                        }
                                      }
                                    }
                                  }
                                };
                                if (stratify0$2) {
                                  tmp0 = union(tmp0, array(array(tsel$0)));
                                } else {
                                  tmp0 = union(tmp0, array(array()));
                                }
                              }
                            }
                          }));;
                        stratify1 = tmp0;
                      }
                    };
                    ret0 = flatten(stratify1);
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
